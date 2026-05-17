#!/bin/bash

# Target folder
TARGET_DIR="public/feat-videos"
TEMP_DIR="public/feat-videos-temp"

# Create temp directory
mkdir -p "$TEMP_DIR"

echo "============================================="
echo "🎥 STARTING AGGRESSIVE KILOBYTE VIDEO COMPRESSION"
echo "============================================="

# Find all MP4s in target dir
for filepath in "$TARGET_DIR"/*.mp4; do
  # Skip if not exists
  [ -e "$filepath" ] || continue

  filename=$(basename "$filepath")
  destpath="$TEMP_DIR/$filename"

  echo "---------------------------------------------"
  echo "🎬 Compressing to Kilobytes: $filename"

  # Measure initial size
  initial_size=$(wc -c < "$filepath")
  initial_size_kb=$((initial_size / 1024))

  # Run ultra-aggressive web compression
  # -an: Strip audio
  # -crf 32: Extra compression while keeping background loops clean
  # -r 24: Cap framerate to 24fps
  # -vf scale=640:360: Downscale to 360p (perfect for bento boxes)
  # -t 8: Cap loop duration to 8 seconds max
  # -movflags +faststart: Instant play loading
  ffmpeg -y -i "$filepath" -an -vcodec libx264 -crf 32 -preset slow -pix_fmt yuv420p -r 24 -vf "scale=640:360" -t 8 -movflags +faststart "$destpath" > /dev/null 2>&1

  # Measure final size
  final_size=$(wc -c < "$destpath")
  final_size_kb=$((final_size / 1024))

  # Calculate savings percentage
  if [ $initial_size -gt 0 ]; then
    savings=$(( (initial_size - final_size) * 100 / initial_size ))
  else
    savings=0
  fi

  echo "✅ Finished: $filename"
  echo "📉 Size: ${initial_size_kb} KB ➔ ${final_size_kb} KB ($savings% saved!)"
done

# Also let's do the main hero-bg.mp4 in the parent public directory!
echo "---------------------------------------------"
echo "🎬 Compressing: public/hero-bg.mp4"
initial_size=$(wc -c < "public/hero-bg.mp4")
initial_size_kb=$((initial_size / 1024))

# Downscale hero bg to 800:450 (keep full-screen loop crisp but tiny in KB!)
ffmpeg -y -i "public/hero-bg.mp4" -an -vcodec libx264 -crf 32 -preset slow -pix_fmt yuv420p -r 24 -vf "scale=800:450" -t 5 -movflags +faststart "public/hero-bg-temp.mp4" > /dev/null 2>&1

final_size=$(wc -c < "public/hero-bg-temp.mp4")
final_size_kb=$((final_size / 1024))

savings=$(( (initial_size - final_size) * 100 / initial_size ))
echo "✅ Finished: public/hero-bg.mp4"
echo "📉 Size: ${initial_size_kb} KB ➔ ${final_size_kb} KB ($savings% saved!)"

echo "============================================="
echo "🔄 REPLACING ORIGINAL VIDEOS"
echo "============================================="

# Move temp videos to replace original ones
mv "$TEMP_DIR"/*.mp4 "$TARGET_DIR/"
mv "public/hero-bg-temp.mp4" "public/hero-bg.mp4"

# Remove temp folder
rm -rf "$TEMP_DIR"

echo "✨ All videos successfully compressed into lightweight KILOBYTES range!"
echo "============================================="
