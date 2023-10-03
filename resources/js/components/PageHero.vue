<template>
<div class="page-hero-container">
    <div class="product-image">
        <img src="../../images/door.png" />
    </div>
    <div class="product-details">
        <h1>Introducing</h1>
        <div id="adImage">
            <img src="../../images/compDoorAd.png" />
        </div>
        <ul>
            <li>Over 250 colour combinations inside & out</li>
            <li>48mm solid timber core</li>
            <li>Highly advanced secure locking system</li>
            <li>Chamfered or sculptured frames</li>
            <li>All locks compliant PAS24: 2016</li>
            <li>ABS security cylinder as standard</li>
        </ul>
    </div>
    <div class="product-price-details">
        <h1 id="brand">RUTLAND</h1>
        <p>Composite Doors</p>
        <p><span>You Choose</span></p>
        <div class="product-choices">
            <button @click="selectOption('supplyOnly')" :class="{active: selectedOption === 'supplyOnly'}">
                <font-awesome-icon v-if="selectedOption === 'supplyOnly'" :icon="['fas', 'check']" /> Supply Only
            </button>
            <button @click="selectOption('fullyFitted')" :class="{active: selectedOption === 'fullyFitted'}">
                <font-awesome-icon v-if="selectedOption === 'fullyFitted'" :icon="['fas', 'check']" /> Fully Fitted
            </button>
        </div>
        <h2><span id="old-price">Was £{{ previousPrice }} / </span> <span id="new-price">
                Now £{{ newPrice }}
            </span></h2>
        <h2 id="saving">Save £{{ previousPrice - newPrice }}</h2>
        <sub>{{ description }}</sub>
        <div class="product-cta">
            <Button text="add to basket" variant="primary" />
            <Button text="customise this product" variant="secondary" />
        </div>
    </div>
</div>
</template>

<script>
import Button from "./Button.vue";

export default {
    name: "PageHero",
    components: {
        Button
    },
    data() {
        return {
            selectedOption: 'supplyOnly',
            prices: {
                supplyOnly: {
                    previous: 999,
                    current: 786
                },
                fullyFitted: {
                    previous: 1999,
                    current: 1786
                }
            }
        };
    },
    computed: {
        previousPrice() {
            return this.prices[this.selectedOption]?.previous || 0;
        },
        newPrice() {
            return this.prices[this.selectedOption]?.current || 0;
        },
        description() {
            if (this.selectedOption === 'supplyOnly') {
                return "inc VAT & Free Delivery";
            } else if (this.selectedOption === 'fullyFitted') {
                return "Fully Fitted, 10 Year Product Guarantee, 5 Year Fitting Guarantee";
            }
            return "";
        }
    },
    methods: {
        selectOption(option) {
            this.selectedOption = option;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../sass/app.scss';

.page-hero-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2em;
    margin: 3em 0;

    @media (min-width: 768px) and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);

        div:last-of-type {
            grid-column: 1 / -1;
            ;
        }
    }

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 2fr;
        align-items: center;
    }

    .product-image {
        display: flex;

        img {
            width: auto;
            margin: 0 auto;
            max-height: 40vh;
            object-fit: cover;
        }
    }

    .product-details {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        h1 {
            margin: unset;
            font-size: clamp(2em, 5vw, 3em);
        }

        #adImage {
            display: flex;

            img {
                width: 70%;
                margin: 0 auto;
                max-height: 40vh;
                object-fit: cover;
            }
        }

        ul {
            width: fit-content;
            padding: unset;

            li{
                font-size: clamp(1em, 2vw, 1.2em);
                margin: 0.5em 0;
            }
        }
    }

    .product-price-details {
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align: center;

        h2 {
            margin: unset;
        }


        p {
            font-weight: 300;
            font-size: clamp(1rem, 3vh, 3rem);
            margin: unset;
            margin: 0.5em;
            &:nth-of-type(2){
                font-weight: 700;
                font-size: clamp(1rem, 2.5vh, 2rem);
                margin: 0.5em 0 0.2em 0;
            }
        }

        .product-choices {
            display: flex;
            
            button {
                padding: 1em 1em;
                width: 50%;
            }
        }

        button {
            border: none;
            padding: 1em 2em;
            transition: all 0.3s;
            cursor: pointer;
            margin: 0.5em 0;

            &.active {
                color: $white;
                background-color: $primary;
            }

        }

        #brand {
            color: $dark;
            font-size: clamp(3rem, 8vw, 6rem);
            margin: unset;
            line-height: 0.5em;
        }

        h2 {
            font-size: clamp(2rem, 4vw, 2.5rem);
        }

        sub {
            font-size: clamp(1.3rem, 1vw, 2rem);
            font-weight: lighter;
        }
        #saving {
            margin: 0.1em;
        }

        #old-price {
            color: $wine;
            margin: 0.1em;
        }

        #new-price {
            color: $primary;
        }

        .product-cta {
            margin: 2em 0;
        }
    }
}
</style>
