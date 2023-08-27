<!DOCTYPE html>
<html>
<head>
    <title>Formulario de Preguntas</title>
</head>
<body>
    <div class="question-form-container">
        <h1 class="question-form-title">Formulario de Preguntas</h1>
        <?php
        
        $answers = [];
   
        $score = null;
    
        $incorrectQuestions = [];

        function handleAnswerSelection($questionId, $selectedOption) {
            global $answers;
            $answers[$questionId] = $selectedOption;
        }

    
        $questions = [
            [
                'id' => 1,
                'question' => '¿Cuál es la capital de Francia?',
                'options' => ['Londres', 'París', 'Madrid', 'Berlín'],
                'correctAnswer' => 1, 
            ],
            [
                'id' => 2,
                'question' => '¿Cuál es el río más largo del mundo?',
                'options' => ['Amazonas', 'Nilo', 'Misisipi', 'Yangtsé'],
                'correctAnswer' => 0,
            ],
            [
                'id' => 3,
                'question' => '¿Cuál es el planeta más grande del sistema solar?',
                'options' => ['Tierra', 'Marte', 'Júpiter', 'Venus'],
                'correctAnswer' => 2,
            ],
        ];

        
        function handleSubmit() {
            global $answers, $score, $incorrectQuestions, $questions;

            $currentScore = 0;
            $incorrectQuestionsArray = [];

            foreach ($questions as $question) {
                if (isset($answers[$question['id']]) && $answers[$question['id']] === $question['correctAnswer']) {
                    $currentScore++;
                } else {
                    $incorrectQuestionsArray[] = $question;
                }
            }

            
            $score = $currentScore;
          
            $incorrectQuestions = $incorrectQuestionsArray;
        }

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            foreach ($_POST as $key => $value) {
                if (strpos($key, 'question-') === 0) {
                    $questionId = intval(substr($key, strlen('question-')));
                    handleAnswerSelection($questionId, intval($value));
                }
            }
            handleSubmit();
        }
        ?>

        <form method="POST">
            <?php foreach ($questions as $question) { ?>
                <div class="question">
                    <p><?php echo $question['question']; ?></p>
                    <?php foreach ($question['options'] as $index => $option) { ?>
                        <label class="answer-label">
                            <input
                                type="radio"
                                name="question-<?php echo $question['id']; ?>"
                                value="<?php echo $index; ?>"
                                <?php if (isset($answers[$question['id']]) && $answers[$question['id']] === $index) echo 'checked'; ?>
                                onchange="this.form.submit()"
                            />
                            <?php echo $option; ?>
                        </label>
                    <?php } ?>
                </div>
            <?php } ?>
            <button type="submit" class="submit-button">Enviar Respuestas</button>
        </form>

        <?php if ($score !== null) { ?>
            <div class="score">
                <p>Puntuación: <?php echo $score; ?> de <?php echo count($questions); ?></p>
            </div>
        <?php } ?>

        <?php if (!empty($incorrectQuestions)) { ?>
            <div class="incorrect-questions">
                <p>Preguntas incorrectas:</p>
                <ul>
                    <?php foreach ($incorrectQuestions as $question) { ?>
                        <li><?php echo $question['question']; ?></li>
                    <?php } ?>
                </ul>
            </div>
        <?php } ?>
    </div>
</body>
</html>
