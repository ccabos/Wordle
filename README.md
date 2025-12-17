# Wordle Game

A fun and interactive word-guessing game with support for 4-8 character words. Built with vanilla HTML, CSS, and JavaScript.

## 🎮 Play Now

**[Live Demo on GitHub Pages](https://ccabos.github.io/Wordle/)**

## ✨ Features

- **Multiple Word Lengths**: Choose from 4, 5, 6, 7, or 8 letter words
- **Custom Word Challenges**: Create your own word and share a link for others to guess
- **Shareable Links**: Generate encoded URLs to challenge friends with specific words
- **Visual Feedback**: Color-coded tiles show correct letters (green), present letters (yellow), and absent letters (gray)
- **Interactive Keyboard**: Use either the on-screen keyboard or your physical keyboard
- **6 Attempts**: Try to guess the word in 6 attempts or less
- **Word Validation**: Only valid words from the curated word lists are accepted
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Theme**: Easy on the eyes with a modern dark interface

## 🎯 How to Play

1. **Select Word Length**: Choose between 4-8 letters using the dropdown menu
2. **Make a Guess**: Type a word using your keyboard or click the on-screen keys
3. **Submit**: Press Enter to submit your guess
4. **Interpret Feedback**:
   - 🟩 **Green**: Letter is correct and in the right position
   - 🟨 **Yellow**: Letter is in the word but in the wrong position
   - ⬜ **Gray**: Letter is not in the word
5. **Win or Try Again**: Guess the word in 6 attempts to win!

## 🎁 Create Custom Word Challenges

Challenge your friends with your own words!

### How to Create a Challenge:

1. **Enter Your Word**: Type any 4-8 letter word in the "Create Challenge" input field
2. **Generate Link**: Click "Create Link" to generate a shareable URL
3. **Copy & Share**: Click "Copy Link" to copy the URL to your clipboard
4. **Challenge Friends**: Share the link with anyone - they'll try to guess YOUR word!

### Example:

If you create a challenge with the word "HELLO", you'll get a shareable link like:
```
https://ccabos.github.io/Wordle/?w=SEVMTE8=
```

The word is encoded (Base64) so it's hidden from plain view in the URL. When someone clicks your link, they'll play a game trying to guess your specific word!

### Important Notes:
- **Custom words DON'T need to be in the dictionary!** Use any word you want: names, made-up words, acronyms, etc.
- Custom words must be 4-8 letters long
- Only letters (A-Z) are allowed (no numbers or special characters)
- The custom word UI is hidden when someone is playing your challenge
- Players can still see your word length from the game board
- Players can guess ANY word from the word lists, plus your custom word will always be accepted as a valid guess

## 📊 Word Lists

The game includes extensive, curated word lists for each length:
- **4-letter words**: 249 words
- **5-letter words**: 514 words
- **6-letter words**: 517 words
- **7-letter words**: 510 words
- **8-letter words**: 535 words

**Total: 2,325 validated words**

### How Word Lists Work

**In Normal Mode:**
- The game randomly selects a target word from the appropriate word list
- Players can only submit guesses that exist in the word lists
- This ensures fair gameplay with real, common English words

**In Custom Challenge Mode:**
- You can use ANY word (4-8 letters), even if it's not in the dictionary
- Players can guess words from the lists OR your exact custom word
- This allows creative challenges with names, made-up words, or uncommon terms

### Word List Validation

All word lists have been validated to ensure:
- ✅ Words match their declared length (no 5-letter words in the 4-letter list)
- ✅ No duplicate entries
- ✅ Proper capitalization (all uppercase)
- ✅ Common English words (curated from standard vocabulary)

### Extending the Word Lists

Want to add more words? It's easy!

1. **Open `script.js`**
2. **Find the `WORD_LISTS` object** (starts at line 1)
3. **Add words to the appropriate array:**
   ```javascript
   5: ['ABOUT', 'ABOVE', ..., 'YOUR_WORD', 'ANOTHER'],
   ```
4. **Important rules:**
   - Words must be in ALL CAPS
   - Must match the array's letter count
   - Separate with commas
   - Use single quotes

5. **Validate your changes:**
   ```bash
   node test_validation.js
   ```

This will catch any errors like wrong lengths, duplicates, or formatting issues.

**Example:**
```javascript
const WORD_LISTS = {
    4: ['ABLE', 'ALSO', 'AREA', 'BACK', 'YOUR', 'WORD'],  // Added 'YOUR' and 'WORD'
    5: ['ABOUT', 'ABOVE', 'HELLO', 'WORLD'],  // Added 'HELLO' and 'WORLD'
    // ... rest of the lists
};
```

## 🚀 Local Development

To run the game locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ccabos/Wordle.git
   cd Wordle
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     python3 -m http.server 8000
     ```
   - Then visit `http://localhost:8000`

## 🧪 Testing

The project includes a validation script to ensure word list integrity:

```bash
node test_validation.js
```

This will verify:
- All words match their declared length
- No duplicate words exist
- Proper formatting

## 🛠️ Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with animations
- **Vanilla JavaScript**: No frameworks, just pure JS
- **GitHub Pages**: Free hosting

## 📁 Project Structure

```
Wordle/
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── script.js           # Game logic and word lists
├── test_validation.js  # Word list validation
└── README.md           # This file
```

## 🎨 Customization

You can easily customize the game by:

### Visual Customization
- **Colors**: Edit color values in `style.css`
  - Tile colors: `.tile.correct`, `.tile.present`, `.tile.absent`
  - Background: `body { background-color: ... }`
  - Keyboard: `.key`, `.key:hover`

### Gameplay Customization
- **Attempts**: Change `maxAttempts: 6` in `script.js` (line 247)
- **Word Lists**: See "Extending the Word Lists" section above
- **Word Lengths**: Add new length categories to `WORD_LISTS` object
  ```javascript
  9: ['WONDERFUL', 'BEAUTIFUL', 'CHALLENGE'],  // 9-letter words
  10: ['BASKETBALL', 'JAVASCRIPT', 'TECHNOLOGY']  // 10-letter words
  ```
  Then add options to the HTML dropdown in `index.html`

## 🐛 Known Issues

None at the moment! If you find a bug, please open an issue.

## 📝 License

This project is open source and available for personal and educational use.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add more words to the word lists
- Improve the UI/UX
- Fix bugs
- Add new features

## 👏 Acknowledgments

- Inspired by the original Wordle game by Josh Wardle
- Word lists curated from common English vocabulary

---

**Enjoy the game!** 🎉
