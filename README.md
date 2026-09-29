# SYNETRIX
 
 Elegant, clean and responisve design using regular design patterns. Muli-device compatibility along with accessibility features. Clean animation adn transition features for a professional guided layout through the content provided.

 Features:
 - light and dark mode compatibility
 - Chat bot assistant Querying
 - Automation of navigation 
 - Hands free navigation 
 - multi-lingual compatibility
 
 ## Content structure
 ### Sections
 1. front page and header:
        Clean and branded design featuring clean design principles and responsive best practices
 2. About me:
        A clean and polished self introductor, mission statement and objectives.
 3. Projects and experiences:
        Turn wheel for projects , Easy on the eyes practice with manual and automatic project navigation.
 4. Contact and Community:
        Community links and breakdowns as cross stacked flash cards in brick formation.
 5. Footer:
        Social platforms and standardised closing best practices.


### logic Structure
Filing structure
|__Palette
|__Animations
|__Automation and navigation 
|__language_Logic and Audio
|__ Language model or API handling
|__Chat bot logic
|__Images
|__main page, Style page, Javascsript page


## API and Frameworks

## website technical overview
### Clean architectual pattern 
Keeps your styling logic modular, readable, and scalable.

- ACS style structuring
       - Palette.css :
              color definitions. (THEMES) --> browser/ system default
       - Design.css:
              layout, spacing, typography, component styling. 
       - Responsive.css:
              Different media sizes ()

                 :root
                   │
          ┌────────┴────────┐
          │                 │
       LIGHT              DARK
     variables          variables
          │                 │
          └────────┬────────┘
                   ↓
             Components
                   │
          ┌────────┼────────┐
          ↓        ↓        ↓
        body     cards    buttons

`Logic Flow`
Palette
   ↓
Design
   ↓
Responsive

### clean structural layers
HTML
│
├── Header
│   ├── Brand
│   ├── Navigation
│   └── Mobile menu
│
├── Main
│   ├── Hero
│   ├── About
│   ├── Projects
│   └── Contact
│
└── Footer
    ├── Brand
    ├── Links
    ├── Social
    └── Legal

CSS
│
├── Theme
├── Variables
├── Reset
├── Global styles
├── Header
├── Front page
├── About
├── Projects
├── Contact
└── Footer

JavaScript
│
├── Theme switching
├── Mobile navigation
├── Dynamic year
└── Interactive features