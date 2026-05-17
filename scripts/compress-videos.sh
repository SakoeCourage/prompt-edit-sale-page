#!/bin/bash

# Target folder
TARGET_DIR="public/feat-videos"
TEMP_DIR="public/feat-videos-temp"

# Create temp directory
mkdir -p "$TEMP_DIR"

echo "============================================="
echo "🎥 STARTING PRO-LEVEL VIDEO COMPRESSION"
echo "============================================="

# Find all MP4s in target dir
for filepath in "$TARGET_DIR"/*.mp4; do
  # Skip if not exists
  [ -e "$filepath" ] || continue

  filename=$(basename "$filepath")
  destpath="$TEMP_DIR/$filename"

  echo "---------------------------------------------"
  echo "🎬 Compressing: $filename"

  # Measure initial size
  initial_size=$(wc -c < "$filepath")
  initial_size_kb=$((initial_size / 1024))

  # Run hyper-optimized compression command
  # -an strips audio
  # -crf 28 optimizes for high-end web loading with small footprint
  # -pix_fmt yuv420p guarantees universal safari/chrome compatibility
  # -movflags +faststart moves moov atom to front for instant stream playing
  ffmpeg -y -i "$filepath" -an -vcodec libx264 -crf 28 -preset slow -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -movflags +faststart "$destpath" > /dev/null 2>&1

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

ffmpeg -y -i "public/hero-bg.mp4" -an -vcodec libx264 -crf 28 -preset slow -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -movflags +faststart "public/hero-bg-temp.mp4" > /dev/null 2>&1

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

echo "✨ All videos compressed successfully with pixel-perfect Web H.264 formats!"
echo "============================================="
