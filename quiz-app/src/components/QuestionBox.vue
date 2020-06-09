<template>
    <div class="question-box-container">
        <b-container class="bv-example-row">
            <b-row class="justify-content-md-center">
                <b-col md="6">
                    <b-jumbotron>
                        <template v-slot:lead>
                            {{currentQuestion.question}}
                        </template>
                        <hr class="my-4">

                        <div>
                            <b-list-group>
                                <b-list-group-item v-for="(option, index) in shuffledAnswers" :key="index"
                                                   @click="selectAnswer(index)"
                                                   :class="[activeAnswerColor(index)]">
                                    {{option}}
                                </b-list-group-item>
                            </b-list-group>
                        </div>

                        <div v-if="hasQuizCompleted">
                            <div style="text-align: center;">Congrats! Quiz Completed</div>
                        </div>
                        <div v-else>
                            <b-button variant="primary" href="#" class="submit-btn"
                                      @click="submitAnswer" :disabled="isSubmitBtnDisabled">
                                Submit
                            </b-button>
                            <b-button variant="success" href="#" @click="next">Next</b-button>
                        </div>
                    </b-jumbotron>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import _ from 'lodash';

    export default {
        props: {
            currentQuestion: Object,
            next: Function,
            answerQuestion: Function,
            hasQuizCompleted:Boolean,
        },
        data() {
            return {
                shuffledAnswers: [],
                selectedAnswerIndex: null,
                hasAnswered:false,
                isCorrect: null,
                isSubmitBtnDisabled: null,
                correctAnswerIndex:null,
            };
        },
        watch: {
            currentQuestion: {
                immediate: true,
                handler() {
                    this.selectedAnswerIndex = null;
                    let answerOptions = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer];
                    this.shuffledAnswers = _.shuffle(answerOptions);
                    this.isSubmitBtnDisabled = true;
                    this.isCorrect=null;
                    this.correctAnswerIndex=this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer);
                    this.hasAnswered=false;
                },
            },
        },
        methods: {
            selectAnswer(index) {
                // do not let answer it again
                if (this.isCorrect !== null) {
                    return;
                }

                this.selectedAnswerIndex = index;
                this.isSubmitBtnDisabled=false;
            },
            submitAnswer() {
                // do not let answer it again
                if (this.isCorrect !== null) {
                    return;
                }

                this.isCorrect = this.answerQuestion(this.shuffledAnswers[this.selectedAnswerIndex]);
                this.isSubmitBtnDisabled = true;
                this.hasAnswered=true;
            },
            activeAnswerColor(answerIndex) {
                if (this.hasAnswered) {
                    if(answerIndex===this.selectedAnswerIndex){
                        return this.isCorrect ? 'correct' : 'incorrect';
                    } else if(answerIndex===this.correctAnswerIndex){
                        return 'correct';
                    }
                } else if (answerIndex===this.selectedAnswerIndex) {
                    return 'selected';
                }

                return '';
            }
        },
        computed: {},
    }
</script>

<style scoped>
    .list-group-item {
        cursor: pointer;
        margin-bottom: 10px;
    }

    .list-group-item.selected {
        background: #2c3e50;
        color: white;
    }

    .list-group-item.correct {
        background: green;
        color: white;
    }

    .list-group-item.incorrect {
        background: red;
        color: white;
    }

    .submit-btn{
        margin-right: 10px;
    }

    .submit-btn.disabled{
        background: grey;
    }
</style>