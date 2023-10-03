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

    @media (min-width: 768px) and (max-width: 1024px) {
       grid-template-columns: repeat(2, 1fr);
        
       div:last-of-type {
        grid-column: 1 / -1;;
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

        #brand {
            font-size: 3em;
            margin: unset;
            font-weight: 700;
        }

        p {
            font-weight: 300;
            margin: 0.4em 0;
            font-size: large;
            span {
                font-weight: 700;
                font-size: small;
            }
        }

        .product-choices {
            display: flex;
                margin-bottom: 0.5em;

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
            font-size: 3rem;
            margin: unset;
            line-height: 0.5em;
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
            margin: 1em 0;
        }
    }
}

// .page-hero-container {
//     display: grid;
//     grid-template-columns: 1fr;
//     grid-template-rows: 0fr 1fr 1fr;
//     justify-content: center;
//     max-height: 0vh;
//     text-align: center;
//     padding: 1em;
//     column-gap: 1em;

//     h1 {
//         margin: unset;
//         padding: unset;
//     }

//     .product-image,
//     div>div {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         overflow: hidden;

//         img {
//             max-width: 100%;
//             max-height: 100%;
//             object-fit: cover;
//         }
//     }

//     .product-details {

//         ul{
//             padding: 1em 3em;

//             li{
//                 font-size: large;
//                 font-weight: lighter;
//                 text-align: start;
//             }
//         }
//     }
// .product-choices {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: -1em 0;

//     button {
//         border: none;
//         padding: 1em 2em;
//         transition: all 0.3s;
//         cursor: pointer;
//         ;

//         &.active {
//             color: $white;
//             background-color: $primary;
//         }
//     }
// }

//     .product-price-details {
//         display: flex;
//         flex-direction: column;
//         gap: 1em;

//         p {
//             font-size: 2em;
//             font-weight: 200;
//             margin: unset;

//             span {
//                 font-size: 0.8em;
//                 font-weight: bold;
//             }
//         }
//         sub {
//             font-size: large;
//             font-weight: lighter;
//             margin: 0.5em 0 1em 0;
//         }
//         h2 {
//             font-size: 3em;
//             margin: unset;
//         }

//         button {
//             font-size: large;
//             margin: 0.5em 0;
//         }

// #brand {
//     color: $dark;
//     font-size: 5rem;
//     margin: unset;
//     line-height: 0.5em;
// }

// #saving {
//     margin: -0.5em 0;
// }
// #old-price {
//     color: $wine
// }

// #new-price {
//     color: $primary
// }

//         .product-cta {
//             display: flex;
//             flex-direction: column;
//         }
//     }
// }
</style>
