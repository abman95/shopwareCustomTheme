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
            faqRepository: JSON.parse(localStorage.getItem('faqRepository')) || [],
            productRepository: null,
            successMessage: '',
            errorMessage: '',
            mainProducts: [],
            selectedProductId: null
        };
    },

    computed: {
        mainProductsOptions() {
            return this.mainProducts.map(product => ({ id: product.id, name: product.name }));
        }
    },

    created() {
        this.productRepository = this.repositoryFactory.create('product');
        this.loadMainProducts();
    },

    watch: {
        faqRepository: {
            deep: true,
            handler(newVal) {
                const hasUnanswered = newVal.some(faq => !faq.answer);
                if (hasUnanswered) {
                    this.displayUnansweredFAQ();
                }
            }
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
            /*if (!this.selectedProductId || !this.question || !this.answer) {
                this.errorMessage = 'Bitte füllen Sie alle Felder aus.';
                setTimeout(() => { this.errorMessage = ''; }, 8000);
                return;
            }
            */
           if (!this.selectedProductId || !this.question) {
                this.errorMessage = 'Bitte füllen Sie alle Felder aus.';
                setTimeout(() => { this.errorMessage = ''; }, 8000);
                return;
            }

            const selectedProduct = this.mainProducts.find(product => product.id === this.selectedProductId);
            if (!selectedProduct) {
                this.errorMessage = 'Ausgewähltes Produkt nicht gefunden.';
                setTimeout(() => { this.errorMessage = ''; }, 8000);
                return;
            }
            
            const faqData = { productId: this.selectedProductId, productName: selectedProduct.name, question: this.question, answer: this.answer };
            this.faqRepository.push(faqData);
            localStorage.setItem('faqRepository', JSON.stringify(this.faqRepository));
            const savedDataString = JSON.stringify(this.faqRepository, null, 2);
            this.successMessage = `FAQ wurde gespeichert. Diese Daten wurden gespeichert: ${savedDataString}`;
            setTimeout(() => { this.successMessage = ''; }, 5000);
        },

        saveFAQAnswer(index) {
            const faqAnswerInput = document.getElementById(`faqAnswerInput${index}`);
            this.faqRepository[index].answer = faqAnswerInput.value;
            localStorage.setItem('faqRepository', JSON.stringify(this.faqRepository));
            this.displayUnansweredFAQ();
        },

        displayUnansweredFAQ() {
            const unansweredFaq = document.getElementById('displayUnansweredFAQ');
            unansweredFaq.innerHTML = '';
            this.faqRepository.forEach((obj, index) => {
                if (obj.question && !obj.answer) {
                    const div = document.createElement('div');
                    div.className = 'faq-unanswered-container';
        
                    const question = document.createElement('p');
                    question.className = 'faq-unanswered-question';
                    question.textContent = `Frage: ${obj.question}. Produkt: ${obj.productName}`;
                    div.appendChild(question);
        
                    const faqAnswerInput = document.createElement('input');
                    faqAnswerInput.className = 'faq-unanswered-answer-input';
                    faqAnswerInput.id = `faqAnswerInput${index}`;
                    faqAnswerInput.placeholder = 'Antwort eingeben';
                    div.appendChild(faqAnswerInput);
        
                    const submitFaqAnswer = document.createElement('button');
                    submitFaqAnswer.className = 'faq-unanswered-submit-button';
                    submitFaqAnswer.textContent = 'Antwort senden';
                    submitFaqAnswer.addEventListener('click', () => this.saveFAQAnswer(index));
                    div.appendChild(submitFaqAnswer);
        
                    unansweredFaq.appendChild(div);
                }
            });
        }
        
        
    },

    mounted() {
        this.displayUnansweredFAQ();
    }
});