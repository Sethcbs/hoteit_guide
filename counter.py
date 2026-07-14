#read a given text file as command-line argument
#count lines, words, and characters
#print in a formatted table
import sys

def word_counter(filename): 
    file_text = ""
    line_count = 0
    with open(filename, "r") as f:
        file_text = f.read()
    with open(filename, "r") as f:
        for lines in f:
            line_count += 1
    
    word_count = len(file_text.split())
    char_count = len(file_text)

    print(f"File:    {filename}")
    print(f"Lines:    {line_count}")
    print(f"Words:    {word_count}")
    print(f"Chars:    {char_count}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python counter.py <filename>")
    else:
        word_counter(sys.argv[1])
