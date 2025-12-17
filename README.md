# Wordle Game

A fun and interactive word-guessing game with support for 4-8 character words. Built with vanilla HTML, CSS, and JavaScript.

## 🎮 Play Now

**[Live Demo on GitHub Pages](https://ccabos.github.io/Wordle/)**

## ✨ Features

- **Multiple Word Lengths**: Choose from 4, 5, 6, 7, or 8 letter words
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

## 📊 Word Lists

The game includes extensive word lists for each length:
- **4-letter words**: 249 words
- **5-letter words**: 514 words
- **6-letter words**: 517 words
- **7-letter words**: 510 words
- **8-letter words**: 535 words

All word lists have been validated to ensure:
- Words match their declared length
- No duplicate entries
- Proper capitalization
- Common English words

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
- Modifying word lists in `script.js`
- Adjusting colors in `style.css`
- Changing the number of attempts in `script.js` (`maxAttempts`)
- Adding more word lengths to `WORD_LISTS`

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
