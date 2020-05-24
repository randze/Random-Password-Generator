# Random-Password-Generator
A simple random password generator
- Prompts user for Uppercase Letters, Numbers, and/or Special Characters
- Asks for Length of Password checks it's between 8~128

## Pseudocode
```
- Store potential Letters/Numbers/Characters
- Ask for critera
    - If true added to a total selection
    - Asked for length of password to be generated
    - Checked if between 8~128 if not prompt again
- To make sure there was at least 1 of the asked critera in the generated password
    - Added 1 of each critera
    - While subtracting 1 from the total password length
- For looped the rest of the password
- Had to SHUFFLE the password, since the beginning order was set, therefore not fully a random password
- Convert array to string

```

## Problems Encountered
```
- Finding a way to shuffle my array
- Output as an array came with commas at first

```

## Improvements to be done
```
- refactoring code
- better value checks
- Specify number of Uppercase/Numbers/Special Characters
- Cover more special characters

```