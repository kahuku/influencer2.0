import os
import sys

directory = "/Users/drew/Documents/Soph_Year/Winter/260/influencer/src/assets/tombrady/"

i = 1
for filename in os.listdir(directory):
    print(filename)
    if "jpg" in filename:
        os.rename(directory + filename, directory + str(i) + ".jpg")
    i += 1
