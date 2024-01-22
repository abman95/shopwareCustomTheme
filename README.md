![Shopware Theme Installing Guide 4](https://github.com/abman95/shopwareCustomTheme/assets/132164884/4dad7f78-f59f-41a3-ad39-5fc46ebddc45)
![Shopware Theme Installing Guide 1](https://github.com/abman95/shopwareCustomTheme/assets/132164884/1782619a-1fa0-4377-9586-0c03891bcdbe)
![Shopware Theme Installing Guide 2](https://github.com/abman95/shopwareCustomTheme/assets/132164884/e9a67a8f-2e5c-49f6-bba1-472c0d8a1a21)
![Shopware Theme Installing Guide 3](https://github.com/abman95/shopwareCustomTheme/assets/132164884/a1cde54c-644d-4d0b-b654-45aec851167c)

### Installation Instructions for Shopware Theme

Operating System Used for Instruction: Linux Kubuntu

### Quick Guide: Shopware Theme Installation and Setup on Linux Kubuntu with Docker and Visual Studio Code

#### Terminal Instructions:

-   Run the command: `docker run -p 80:80 dockware/dev:latest`.
-   Wait until the container is fully started.
-   Clone the Git repository into the running container using the command: `git clone https://github.com/abman95/shopwareCustomTheme /var/www/html/custom/plugins/AbmanTheme`.

#### Setting Up in IDE Visual Studio Code:

-   Install the "Docker for Visual Studio Code" extension.
-   Click the blue button at the bottom left of the IDE.
-   Choose "Attach to running Container" and select the "dockware/dev:latest" container.

#### In the Visual Studio Code Terminal:

-   Navigate to the html directory: `cd /var/www/html`.
-   Refresh the plugin list: `bin/console plugin:refresh`.
-   Install and activate the AbmanTheme: `bin/console plugin:install --activate AbmanTheme`.
-   Change the theme: `bin/console theme:change`.
    -   Choose `1` for AbmanTheme when prompted.
    -   For "Please select a sales channel:", choose `0` for Storefront.
-   Compile the theme and build scripts:
    -   `bin/console theme:compile`
    -   `bin/build-storefront.sh`
    -   `bin/build-administration.sh`
    -   `bin/build-js.sh`

#### Testing Features:

-   Visit `localhost` and `localhost/admin` in your browser to test the features.

##### Feature 1: Enhanced Shopping Cart Button

-   In `localhost`, open a product. The "Add to shopping cart" button shows an animation effect for 1 second upon clicking.
-   To modify this animation color, log into `localhost/admin` with Username `admin` and Password `shopware`.
-   Navigate to `Content/Themes`, select `AbmanTheme`, and adjust the "Cart Click Animation Color" under Color Settings.

##### Feature 2: Product FAQ Functionality (Local Storage)

-   On `localhost/admin`, go to `Catalogues/Products/Product FAQ`.
-   On the product detail page, users can submit questions under "Produkt FAQ:".
-   These questions are stored locally using LocalStorage and appear under "Unbeantworteten FAQ Fragen" in the `Catalogues/Products/Product FAQ` section.



### Detailed Installation Guide:

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
-   
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
