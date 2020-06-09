<template>
    <div id="app">
        <Header
                :totalAnswer="totalAnswer"
                :totalCorrect="totalCorrect">
        </Header>
        <QuestionBox
                v-if="questions.length>0"
                :currentQuestion="questions[questionIndex]"
                :next="next"
                :answerQuestion="answerQuestion"
                :hasQuizCompleted="hasQuizCompleted">
        </QuestionBox>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import QuestionBox from './components/QuestionBox.vue'

    export default {
        name: 'App',
        components: {
            Header,
            QuestionBox,
        },
        data() {
            return {
                questions: [],
                questionIndex: 0,
                totalAnswer: 0,
                totalCorrect: 0,
                hasQuizCompleted:false,
            };
        },
        methods: {
            next() {
                if (this.questionIndex < 9) {
                    this.questionIndex++;
                } else {
                    this.hasQuizCompleted=true;
                }
            },
            answerQuestion(answer) {
                let currentQuestion = this.questions[this.questionIndex];
                let isCorrect = currentQuestion.correct_answer === answer;

                if (isCorrect) {
                    this.totalCorrect++;
                }

                this.totalAnswer++;


                return isCorrect;
            },
        },
        mounted() {
            fetch('https://opentdb.com/api.php?amount=10&category=27&type=multiple', {
                method: 'get',
            })
                .then((response) => response.json())
                .then((questions) => {
                    this.questions = questions.results;
                });
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
