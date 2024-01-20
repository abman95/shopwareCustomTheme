import template from './faq-module-index.html.twig';
import './faq-module.scss';

Shopware.Component.register('faq-module-index', {
    template,

    inject: ['repositoryFactory'],

    data() {
        return {
            question: '',
            answer: '',
            isLoading: false,
            faqRepository: [],
            productRepository: null,
            successMessage: '',
            errorMessage: '',
            mainProducts: [],
            selectedProductId: null
        };
    },

    computed: {
        mainProductsOptions() {
            return this.mainProducts.map(product => {
                return { id: product.id, name: product.name };
            });
        }
    },

    created() {
        this.productRepository = this.repositoryFactory.create('product');
        this.loadMainProducts();

        const savedFAQs = localStorage.getItem('faqRepository');
        if (savedFAQs) {
            this.faqRepository = JSON.parse(savedFAQs);
        }
    },
    
    methods: {
        loadMainProducts() {
            this.isLoading = true;
            const criteria = new Shopware.Data.Criteria();
            criteria.addFilter(Shopware.Data.Criteria.equals('product.parentId', null));
    
            this.productRepository.search(criteria, Shopware.Context.api)
                .then(result => {
                    this.mainProducts = result;
                    this.isLoading = false;
                })
                .catch(error => {
                    console.error('Fehler beim Laden der Hauptprodukte:', error);
                    this.isLoading = false;
                });
        },

        async saveFAQ() {
            if (!this.selectedProductId || !this.question || !this.answer) {
                this.errorMessage = 'Bitte füllen Sie alle Felder aus.';
                setTimeout(() => { this.errorMessage = ''; }, 8000);
                return;
            }

            const faqData = {
                productId: this.selectedProductId,
                question: this.question,
                answer: this.answer
            };
        
            this.faqRepository.push(faqData);
        
            localStorage.setItem('faqRepository', JSON.stringify(this.faqRepository));
        
            const savedDataString = JSON.stringify(this.faqRepository, null, 2);
            this.successMessage = `FAQ wurde gespeichert. Diese Daten wurden gespeichert: ${savedDataString}`;
            setTimeout(() => { this.successMessage = ''; }, 5000);
        }
    }
});
