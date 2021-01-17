<template>
    <div :class="activeCls?'h-border h-border-orange-600 h-bg-white h-search-wrapper':'h-border h-border-gray-400 h-bg-gray-300 h-search-wrapper'">
        <input class="h-outline-none h-bg-transparent h-text-black h-placeholder-gray-500"
               @focus="handleFocus"
               @blur="handleBlur"
               @change="handleChange($event)"
               :placeholder="placeholder" :value="value"/>
        <h-icon icon="h-icon-search" @click="search"/>
        <div class="h-search-mask" v-show="activeCls">
            <div>

            </div>
            <p>
                <a href="javascript:void(0);">
                    <span>查看更多热搜视频</span>
                    <h-icon icon="h-icon-arrow-right"></h-icon>
                </a>
            </p>
            <ul>
                <li v-for="(item,index) in dataSource" :key="index">
                    <span class="first">{{index+1}}</span>
                    <span class="last">{{item.text}}</span>
                    <i v-show="item.status===1" class="hot">热</i>
                    <i v-show="item.status===0" class="new">新</i>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import HIcon from './HIcon';

    export default {
        name: "HSearch",
        data() {
            return {
                value: "",
                activeCls: false
            };
        },
        watch: {
            dataSource(newVal, oldVal) {

            }
        },
        props: {
            search: {
                type: Object,
                default: null
            },
            dataSource: {
                type: Array,
                default: []
            },
            placeholder: {
                type: String,
                default: null
            },
            searchChange: {
                type: Object,
                default: function (val) {
                    return val;
                }
            }
        },
        components: {
            HIcon
        },
        methods: {
            handleChange(e) {
                this.searchChange(e.target.value);
                console.log(e.target.value)
                this.value = e.target.value;
            },
            handleFocus() {
                this.activeCls = true;
            },
            handleBlur() {
                this.activeCls = false;
            },
        }
    }
</script>

<style lang="postcss">

    .h-search-wrapper {
        padding: 5px 35px 5px 15px;
        position: relative;

        & > .h-search-mask {
            position: absolute;
            top: 100%;
            margin-top: 2px;
            padding: 10px 0;
            left: 0;
            right: 0;
            @apply h-z-10;
            @apply h-shadow;
            @apply h-bg-white;


            & > p {
                margin: 0 2px;
                padding: 5px 15px;
                line-height: 0;

                &:hover {
                    @apply h-bg-gray-300;
                }

                @apply h-text-sm;


                & > a {
                    @apply h-inline-block;
                    @apply h-align-middle;

                    & > span {
                        @apply h-text-orange-500;
                        @apply h-inline-block;
                        @apply h-align-middle;
                    }

                    & > i {
                        @apply h-inline-block;
                        @apply h-align-middle;

                        &:before {
                            @apply h-text-orange-500;
                        }
                    }
                }
            }

            & > ul {
                position: relative;
                list-style-type: none;
                margin: 0;
                padding: 2px;

                & > li {
                    margin-bottom: 2px;
                    padding: 5px 15px;
                    @apply h-cursor-pointer;
                    line-height: 0;

                    &:nth-child(1) {
                        & > span {
                            &.first {
                                @apply h-inline-block;
                                border-radius: 50%;
                                @apply h-text-white;
                                @apply h-bg-red-500 !important;
                                width: 18px;
                                height: 18px;
                                line-height: 18px;
                                @apply h-text-center;
                                @apply h-align-middle;
                                @apply h-text-sm;
                            }

                            &.last {
                                @apply h-inline-block;
                                @apply h-align-middle;
                                @apply h-text-sm;
                            }
                        }
                    }

                    &:nth-child(2) {
                        & > span {
                            &.first {
                                @apply h-inline-block;
                                border-radius: 50%;
                                @apply h-text-white;
                                @apply h-bg-orange-500 !important;
                                width: 18px;
                                height: 18px;
                                line-height: 18px;
                                @apply h-text-center;
                                @apply h-align-middle;
                                @apply h-text-sm;
                            }

                            &.last {
                                @apply h-inline-block;
                                @apply h-align-middle;
                                @apply h-text-sm;
                            }
                        }
                    }


                    & > span {


                        &.first {
                            @apply h-inline-block;
                            border-radius: 50%;
                            @apply h-text-white;
                            @apply h-bg-gray-800;
                            width: 18px;
                            height: 18px;
                            line-height: 18px;
                            @apply h-text-center;
                            @apply h-align-middle;
                            @apply h-text-sm;
                        }

                        &.last {
                            @apply h-inline-block;
                            @apply h-align-middle;
                            @apply h-text-sm;
                        }
                    }

                    &:last-child {
                        margin-bottom: 0;
                    }

                    &:hover {
                        @apply h-bg-gray-300;
                    }

                    & > i {
                        float: right;
                        &.hot {
                            @apply h-inline-block;
                            width: 18px;
                            height: 18px;
                            line-height: 18px;
                            @apply h-text-white;
                            @apply h-bg-orange-500;
                            @apply h-text-center;
                            @apply h-align-middle;
                            @apply h-rounded;
                        }

                        &.new {
                            @apply h-inline-block;
                            width: 18px;
                            height: 18px;
                            line-height: 18px;
                            @apply h-text-white;
                            @apply h-bg-red-500;
                            @apply h-text-center;
                            @apply h-align-middle;
                            @apply h-rounded;
                        }
                    }
                }
            }
        }

        & > input {
            width: 100%;
            @apply h-text-sm;
        }

        & > i {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            @apply h-cursor-pointer;

            &:hover {
                &:before {
                    @apply h-text-orange-600;
                }
            }
        }
    }
</style>