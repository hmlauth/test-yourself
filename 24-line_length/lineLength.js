// Given a string of words, format and output lines no longer
// than a given line length.

// Must work for any arbitrary value of lineLength provided that, hyphenating not
// required, display error if any word is longer than lineLength

/*

INPUT: STRING
OUTPUT: lines with character = lineLength
CONTRAINTS:
> Must work for arbitrary value of lineLength
> Hyphenating not required
> display error if any word longer than lineLength

EXAMPLES 1:

lineLength = 20;

017 "Lorem ipsum dolor"
009 "sit amet,"
011 "consectetur"
020 "adipiscing elit, sed"
017 "do eiusmod tempor"
020 "incididunt ut labore"
015 "et dolore magna"
018 "aliqua. Ut enim ad"
018 "minim veniam, quis"
020 "nostrud exercitation"
020 "ullamco laboris nisi"
016 "ut aliquip ex ea"
018 "commodo consequat."
015 "Duis aute irure"
008 "dolor in"
016 "reprehenderit in"
020 "voluptate velit esse"
018 "cillum dolore eu f"

--

lineLength = 10;

005 "Lorem"
005 "ipsum"
009 "dolor sit"
005 "amet,"
word longer than 10 characters, nice try
010 "consectetu"
001 "r"
010 "adipiscing"
009 "elit, sed"
010 "do eiusmod"
006 "tempor"
010 "incididunt"
009 "ut labore"
009 "et dolore"
005 "magna"
010 "aliqua. Ut"
007 "enim ad"
005 "minim"
007 "veniam,"
004 "quis"
007 "nostrud"
word longer than 10 characters, nice try
010 "exercitati"
010 "on ullamco"
007 "laboris"
007 "nisi ut"
010 "aliquip ex"
010 "ea commodo"
010 "consequat."
009 "Duis aute"
005 "irure"
008 "dolor in"
word longer than 10 characters, nice try
010 "reprehende"
006 "rit in"
009 "voluptate"
010 "velit esse"
006 "cillum"
009 "dolore eu"
001 "f"

*/



function createLines(string, lineLength) { }


const lineLength = 20;
let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu f";

createLines(paragraph, lineLength);
