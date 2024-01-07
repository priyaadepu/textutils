export const data = [
    {
      type: "mcq",
      question: "Which of the following is used in React.js to increase performance?",
      incorrectAnswers: [
        "Original DOM",
        "A and B",
        "None of the above",
      ],
      correctAnswer: "Virtual DOM",
    },
  
    {
      question:
        "Which of the following port is the default where webpack-dev-server runs?",
      incorrectAnswers: [
        "3000",
        "3308",
        "3030",
      ],
      correctAnswer: "8080",
    },
    {
      question: "Which of the following method is used to access the state of a component from inside of a member function?",
      incorrectAnswers: [
        "thisportotype.stateValue",
        "this.getState()",
        "this.state",
      ],
      correctAnswer: "this.Values",
    },
    {
      question: "State whether true or false:  Props are methods into other components?",
      incorrectAnswers: ["False"],
      correctAnswer: "True",
    },
    {
      question: "What are arbitrary inputs of components in react also known as?",
      incorrectAnswers: [
        "Elements",
        "Keys",
        "Ref",
      ],
      correctAnswer: "Props",
    },
    {
      question: "Among The following options, choose the one which helps react for keeping their data uni-directional?",
      incorrectAnswers: [
        "DOM",
        "JSX",
        "Props",
      ],
      correctAnswer: "Flux",
    },
    {
      question: "What is ReactJS mainly used for building?",
      incorrectAnswers: ["Database", "Connectivity", "Design Platform"],
      correctAnswer: "User Interface",
    },
    {
        type: "coding",
        question: "What will be the output of the following code snippet?",
        codeSnippet: `
          <script type="text/javascript" language="javascript">
            var x = 12;
            var y = 8;
            var res = eval("x+y");
            document.write(res);
          </script>
        `,
        correctAnswer: "20",
        incorrectAnswers: [
            "10",
            "24",
            "NaN",
          ],
    },
    {
        type: "coding",
        question: "What will be the output of the following code snippet?",
        codeSnippet: `
            <script type="text/javascript" language="javascript">
            var a = "Scaler";
            var result = a.substring(2, 4);
            document.write(result);
            </script>
        `,
        correctAnswer: "al",
        incorrectAnswers: [
            "ale",
            "cal",
            "calen",
          ],
    },
    {
        type: "coding",
        question: "What will be the output of the following code snippet?",
        codeSnippet: `
            <script type="text/javascript" language="javascript">
            var x=12;
            var y=8;
            var res=eval("x+y");
            document.write(res);
            </script>
        `,
        correctAnswer: "20",
        incorrectAnswers: [
            "x+y",
            "124",
            "Error",
          ],
    },
];
 
export default data;