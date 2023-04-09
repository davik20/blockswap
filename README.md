# BlockSwap Bid View

## Introduction

This project is an NFT listing dashboard redesign for the Brand Central website, as part of a hack challenge. The main goal is to create a visually appealing and consistent user interface for the dashboard and implement wallet authentication using MetaMask and WalletConnect.

## Technologies and Tools

- Language: Typescript
- Frontend Framework: NextJs
- WalletConnect SDK: wagmi
- Other Tools: ethersjs

## Approach and Implementation

1. **Cloning the brand central page**: To clone the existing brand central page, I used the "Save As" feature in my web browser to download the HTML, CSS, and JavaScript files. I then imported these files into my project and made minor adjustments to the original structure to better suit the new design.


2. **Creating a new theme for the NFT listing dashboard**: I started the design process by analyzing the brand identity and target audience of the website. I took inspiration from the provided Figma design and other modern NFT platforms. For the color scheme, I chose a dark theme with vibrant accent colors to create contrast and attract user attention. I used a clean Montserrat font to ensure legibility and improve the overall aesthetic. I fetched the latest URI artifacts using typescrit and displayed the NFT metadata in a visually appealing manner by creating custom cards with a hover effects.

3. **Implementing wallet authentication with MetaMask and WalletConnect**:
To integrate MetaMask and WalletConnect, I used the wagmi library and the corresponding WalletConnect connector. I set up the required configurations and created a custom "Connect Wallet" button to initiate the connection process. I handled different states, such as connecting, disconnecting, by updating the UI accordingly and providing clear feedback to the user.

4. **Modifying the card layout according to the provided Figma design**: I adapted the card layout from the Figma design to fit the project's needs by creating responsive design adaptations for various screen sizes.I also adjusted the visual hierarchy by making the NFT title and image more prominent and using lighter shades for the secondary information.


## Usage Instructions



1. Clone the repository: `git clone <REPO_URL>`
2. Navigate to the project directory: `cd <PROJECT_DIRECTORY>`
3. Install dependencies: `<DEPENDENCY_INSTALL_COMMAND>`
4. Start the development server: `<DEV_SERVER_START_COMMAND>`
5. Access the dashboard at: `http://localhost:<PORT>`

Alternatively, view the live demo at: `<LIVE_DEMO_LINK>`

## Contributors

- <YOUR_NAME> - [<YOUR_GITHUB_PROFILE_LINK> or <YOUR_CONTACT_INFORMATION>]

## Acknowledgments

Special thanks to Matt for assigning this hack challenge and providing valuable resources and guidance throughout the project.
