### Installation Instructions for Shopware Theme

Operating System Used for Instruction: Linux Kubuntu

#### Terminal Instructions:

-   Open the Terminal and enter the command: `docker run -p 80:80 dockware/dev:latest`.

#### Setting Up in IDE Visual Studio Code:

-   Once installation completes, open your preferred IDE. For this guide, we'll use Visual Studio Code.
-   In Visual Studio Code, install the extension "Docker for Visual Studio Code".
-   After installation, a blue button appears at the bottom-left of the IDE. Click this button. A prompt appears at the top-center. Select "Attach to running Container" and choose the "dockware/dev:latest" container.
-   To integrate the Shopware theme, navigate to `html/custom/plugins` and insert the `AbmanTheme` folder.
-   To activate the theme, open Terminal in Visual Studio Code, navigate to the `html` directory (`cd html`), and execute these commands in sequence:
    -   `bin/console plugin:refresh`
    -   `bin/console plugin:install --activate AbmanTheme`
    -   `bin/console theme:change`
-   When prompted to select a theme, choose:

    csharpCopy code

    `[0] Storefront
    [1] AbmanTheme`

    Enter `1` for `AbmanTheme`.
-   For the prompt "Please select a sales channel:", enter `0` for `Storefront`.
-   Finalize theme activation with the following commands:
    -   `bin/console theme:compile`
    -   `bin/build-storefront.sh`
    -   `bin/build-administration.sh`
    -   `bin/build-js.sh`

#### Testing Features:

-   Open a web browser and visit `localhost`.
-   In a new tab, navigate to `localhost/admin`.

##### Feature 1: Enhanced Shopping Cart Button

-   On the `localhost` page, open a product. The "Add to shopping cart" button shows an animation effect for 1 second upon clicking, changing its background color and text to "Being added to shopping cart".
-   To modify this animation color, log into `localhost/admin` with Username `admin` and Password `shopware`.
-   Navigate to `Content/Themes`, select `AbmanTheme`, and adjust the "Cart Click Animation Color" under Color Settings.
-   Save and confirm changes. Refresh the product page (F5) to view the updated animation color.

##### Feature 2: Product FAQ Functionality (Local Storage)

-   On `localhost/admin`, go to `Catalogues/Products/Product FAQ`. Here, select a product to add FAQ questions and answers, which will be displayed on the product page.
-   On the product detail page under "Produkt FAQ:", users can submit questions. These questions are stored locally using LocalStorage and appear under "Unbeantworteten FAQ Fragen" in the `Catalogues/Products/Product FAQ` section. Answering these questions will display the responses on the respective product detail page.
-   Please note that the FAQs are currently stored only locally due to an incomplete controller and entity setup. The unfinished, non-functional controller and entity are located separately in the `AbmanTheme` folder for reference.
