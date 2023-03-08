# Caesar Cipher
This javascript function takes in a string that is either plain english text or text that has already been encoded. I thought this project would be fun to do as it would expand on the ROT13 cipher project I had done for a freeCodeCamp certification. ROT13 is the common cipher where each letter of the alphabet gets shifted 13 places. It essentially splits the alphabet in half so it is easy to see which letter would correspond to the original one. However, there are other possibiities of shifting the alphabet 1-25 times which creates all those new ciphers. It ended up being pretty simple to implement.

The function has 4 parameters. The first is the string that is being encoded or decoded. The second parameter is the number of times you are shifting the alphabet - if it were 1, then the alphabet would start with B and A would come at the end after Z. The third parameter is a boolean indicating whether the string provided is being encoded. If true, it will be encrypted to the point it won't look like english. If false, it will be decoded to the original alphabet. Finally, the last parameter is also a boolean that indicates whether the string returned should be in all lowercase. By default, the result will be all uppercase no matter the original case of the string.

Examples:

`caesarShift("OKAY", 4, true, false);` returns SOEC

`caesarShift("SoEc", 4, false, true);` returns okay
