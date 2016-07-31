ffmpeg -i 45.mp4 45.webm

To set the video bitrate of the output file to 64 kbit/s

ffmpeg -i input.avi -b:v 64k -bufsize 64k output.avi

To force the frame rate of the output file to 24 fps

ffmpeg -i input.avi -r 24 output.avi

To force the frame rate of the input file (valid for raw formats only) to 1 fps and the frame rate of the output file to 24 fps

ffmpeg -r 1 -i input.m2v -r 24 output.avi

The format option may be needed for raw input files.

