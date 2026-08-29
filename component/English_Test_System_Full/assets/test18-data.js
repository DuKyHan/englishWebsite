const TEST = {
  id: "test18",
  grade: "Grade 9 — Global Success",
  unit: "Unit 3: Healthy living for teens",
  title: "Grade 9 · Unit 3: Healthy living for teens · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test18.html",
  instructions: [
    "Bài kiểm tra gồm 40 câu, chia thành 7 phần (I → VII), tổng 10 điểm.",
    "Bấm chọn đáp án A/B/C/D cho câu trắc nghiệm, hoặc gõ câu trả lời vào ô trống cho câu điền từ / viết lại câu.",
    "Em có thể dùng nút Previous / Next hoặc bấm số câu ở bảng điều hướng để di chuyển giữa các câu.",
    "Khi hết giờ, bài làm sẽ tự động được nộp.",
    "Sau khi nộp bài, em sẽ thấy điểm số, đáp án đúng và giải thích chi tiết cho từng câu."
  ],
  sections: [
    { id: "I", title: "Choose the word / phrase / sentence (A, B, C or D) that best fits the space or best answers the question given in each sentence.", points: "3.5 pts", range: [1, 14] },
    { id: "II", title: "Look at the sign or the notice. Choose the best answer (A, B, C or D).", points: "0.5 pt", range: [15, 16] },
    { id: "III", title: "Choose the word (A, B, C or D) that best fits each space in the following passage.", points: "1.5 pts", range: [17, 22] },
    { id: "IV", title: "Read the passage. Decide True/False (23–26) and choose the best answer (27–28).", points: "1.5 pts", range: [23, 28] },
    { id: "V", title: "Use the correct form of the word given in each sentence.", points: "1.5 pts", range: [29, 34] },
    { id: "VI", title: "Look at the dictionary entry of “priority”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    lifestyleCloze: "It's not easy to manage school and life, but with some good time (17) ____ techniques, it's possible to achieve a study-life balance. Here are some tips for secondary-school students. Firstly, make a schedule. Plan your week in advance, allocating specific times for studying, attending classes, and doing homework. You should also include breaks and time for relaxation (18) ____ hobbies. Secondly, learn to prioritise. You should identify the most important tasks and focus on those first. If necessary, you can delay less urgent activities (19) ____ you've finished your important tasks. Remember that it's okay to say no sometimes if you feel (20) ____. Thirdly, take advantage (21) ____ any free time during the day. For example, you can use long bus journeys to read or review notes. It is also advisable to get small tasks done during short breaks between classes. Finally, don't be too hard on yourself if you (22) ____ do everything perfectly. It's normal to occasionally feel stressed out. In these situations, you can consider talking to a teacher or school counsellor for support.",
    lifestyleReading: "Teenagers can live a balanced lifestyle by getting enough exercise, eating healthily and having enough rest. They need to be involved in a fair level of physical activity to maintain a fit and healthy lifestyle. Physical activity can include a variety of activities such as cycling, playing sports, or walking a dog. Teenagers should aim to perform two or more of these activities regularly. Healthy eating is also an important part of a teenager's life. A human needs food to create energy so that they can function. Eating healthily consists of eating a balance of the five food groups. These include: fruit, vegetables, meat, dairy and a small amount of sugary foods. Having a balanced diet will result in better brain function, healthy weight gain and greater fitness. Finally, a person needs to stop work or movement in order to relax, refresh oneself and recover. Many people think that rest and sleep are the same thing but they are not. Sleep is when your body shuts down to repair and refresh itself. Rest is a time where your body relaxes such as when you go on a holiday or engage in activities that make you happy and give you pleasure. When you rest, you relax and relieve your mind and body of all the things in life that may cause you stress.",
    priorityEntry: {
      word: "priority", ipa: "/praɪˈɒrəti/", pos: "noun",
      def: "something that is very important and must be dealt with before other things",
      examples: [
        "The company's <b>top priority</b> is to improve customer service.",
        "Safety should <b>take priority</b> over everything else.",
        "The government must <b>give priority</b> to education and healthcare.",
        "We need to <b>set priorities</b> before we start the project.",
        "It's a <b>high priority</b> for the team to finish the report by Friday."
      ]
    }
  },
  images: {
    signHealthyChoices: "assets/images/sign_healthy_choices.jpg",
    signEyeCheckup: "assets/images/sign_eye_checkup.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "counsellor", B: "physical", C: "optimistic", D: "submit" },
      correct: "D",
      explanation: "\"counsellor\", \"physical\", \"optimistic\" có phụ âm \"s\" được gạch chân phát âm giống nhau. Riêng \"submit\" /səbˈmɪt/ có \"s\" đầu từ được phát âm khác biệt so với ba từ còn lại → đáp án D."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "priority", B: "deadline", C: "physical", D: "minimize" },
      correct: "C",
      explanation: "\"priority\" /praɪˈɒrəti/, \"deadline\" /ˈdedlaɪn/, \"minimize\" /ˈmɪnɪmaɪz/ đều có phần gạch chân phát âm là <b>/aɪ/</b>. Riêng \"physical\" /ˈfɪzɪkl/ có phần gạch chân phát âm là <b>/ɪ/</b> → khác biệt, đáp án C."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "balance", B: "delay", C: "deadline", D: "mental" },
      correct: "B",
      explanation: "\"balance\" /ˈbæləns/, \"deadline\" /ˈdedlaɪn/, \"mental\" /ˈmentl/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"delay\" /dɪˈleɪ/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án B."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "accomplish", B: "minimize", C: "physical", D: "liveable" },
      correct: "A",
      explanation: "\"minimize\" /ˈmɪnɪmaɪz/, \"physical\" /ˈfɪzɪkl/, \"liveable\" /ˈlɪvəbl/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"accomplish\" /əˈkʌmplɪʃ/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án A."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"I've been feeling very tired lately. I have too much homework.\"",
      prompt: "Anna: \"You should try to ______ a study-life balance to stay healthy.\"",
      display: { A: "achieve", B: "provide", C: "contain", D: "collect" },
      correct: "A",
      explanation: "\"<b>achieve</b> a study-life balance\" (đạt được sự cân bằng học tập – cuộc sống) là cụm cố định, phù hợp với ngữ cảnh giảm mệt mỏi, giữ sức khỏe."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Counselor: \"Are you still worried ______ your upcoming final exams?\"",
      prompt: "Student: \"Yes, but I'm trying to stay optimistic.\"",
      display: { A: "with", B: "of", C: "to", D: "about" },
      correct: "D",
      explanation: "\"worried <b>about</b> something\" — giới từ cố định đi sau tính từ \"worried\" (lo lắng về điều gì)."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Peter: \"I can't focus on my essay. There are too many ______ in this room.\"",
      prompt: "Mary: \"Maybe you should turn off the TV and put your phone away.\"",
      display: { A: "distractions", B: "difficulties", C: "omissions", D: "obstacles" },
      correct: "A",
      explanation: "\"too many <b>distractions</b>\" (quá nhiều thứ gây xao nhãng) phù hợp với việc cần tắt TV và cất điện thoại để tập trung."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Teacher: \"How did you manage to remember that long poem so quickly?\"",
      prompt: "Nam: \"I spent the whole morning learning it ______, sir.\"",
      display: { A: "by memory", B: "compulsory", C: "academic", D: "by heart" },
      correct: "D",
      explanation: "\"learn something <b>by heart</b>\" (học thuộc lòng) là cụm cố định, phù hợp với việc ghi nhớ bài thơ dài."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Doctor: \"Unless you ______ enough water, you ______ become dehydrated.\"",
      prompt: "Patient: \"I'll try to drink more during the day.\"",
      display: { A: "drink – won't", B: "don't drink – will", C: "will drink – might", D: "drink – will" },
      correct: "D",
      explanation: "\"Unless\" (= If ... not) đã mang nghĩa phủ định nên mệnh đề sau \"unless\" chia ở <b>hiện tại đơn khẳng định</b> (drink), và mệnh đề chính dùng \"<b>will</b>\" để diễn tả kết quả tất yếu trong câu điều kiện loại 1."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Mom: \"You look exhausted, dear. What happened?\"",
      prompt: "Son: \"I ______ the project, but it took me all night.\"",
      display: { A: "succeeded", B: "won", C: "managed", D: "accomplished" },
      correct: "D",
      explanation: "\"<b>accomplished</b> the project\" (hoàn thành dự án) phù hợp nhất về nghĩa và cách dùng với tân ngữ trực tiếp \"the project\"."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Lan: \"If you ______ good posture, you may avoid back pain.\"",
      prompt: "Minh: \"Thanks for the tip! I'll try to sit up straight.\"",
      display: { A: "maintain", B: "should maintain", C: "will maintain", D: "maintains" },
      correct: "A",
      explanation: "Câu điều kiện loại 1: \"If + S + V(hiện tại đơn), S + may + V\" — mệnh đề \"if\" chia ở <b>hiện tại đơn</b>: \"if you <b>maintain</b> good posture\"."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Mark: \"I've won the first prize in the English speaking contest!\"",
      prompt: "Adam: \"______\"",
      display: { A: "Stay calm.", B: "Congratulations!", C: "I understand.", D: "Get some sleep." },
      correct: "B",
      explanation: "\"<b>Congratulations!</b>\" là lời chúc mừng phù hợp khi ai đó thông báo tin vui, như đoạt giải nhất cuộc thi."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Nurse: \"How can we improve our daily fitness, Dr. Smith?\"",
      prompt: "Doctor: \"You should incorporate ______ minutes of activity into your routine.\"",
      display: { A: "much", B: "several", C: "a lot", D: "little" },
      correct: "B",
      explanation: "\"<b>several</b> minutes\" — \"several\" (một vài) dùng trước danh từ đếm được số nhiều \"minutes\"."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Jane: \"Why do you always have a schedule for the week?\"",
      prompt: "Lisa: \"______\"",
      display: { A: "Where have you been? I've been waiting for ages!", B: "Let's go to the cinema this weekend, shall we?", C: "I think schedules are quite boring and unnecessary.", D: "Because it helps me manage my time effectively." },
      correct: "D",
      explanation: "Câu hỏi \"Why do you always have a schedule?\" cần một câu trả lời nêu lý do. \"<b>Because it helps me manage my time effectively.</b>\" trả lời trực tiếp bằng \"Because\"."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signHealthyChoices",
      prompt: "What does this sign tell you?",
      display: {
        A: "This area sells healthy food and discourages sugary products.",
        B: "The canteen only serves fast food and sugary snacks.",
        C: "You must bring your own sugary drinks to the canteen.",
        D: "You can buy any kind of soft drinks and candies here."
      },
      correct: "A",
      explanation: "Biển ghi \"HEALTHY CHOICES ONLY — FRESH FRUITS & VEG, WATER — NO SUGARY SNACKS, NO SODA\" → khu vực này chỉ bán đồ ăn lành mạnh và không khuyến khích đồ có đường, đáp án A."
    },
    { id: 16, section: "II", type: "mcq", image: "signEyeCheckup",
      prompt: "What does this notice say?",
      display: {
        A: "Students need to pay for an eye exam at the school clinic.",
        B: "Grade 9 students will have their eyes tested on Tuesday morning.",
        C: "All students must go to the medical room for a dental check-up.",
        D: "The medical room is closed for Grade 9 students this Tuesday."
      },
      correct: "B",
      explanation: "Biển ghi \"SCHOOL NOTICE: GRADE 9 EYE CHECK-UP — TIME: 8:00 AM - 11:00 AM, TUESDAY\" → học sinh khối 9 sẽ được kiểm tra mắt vào sáng thứ Ba, đáp án B."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "lifestyleCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "limitation", B: "period", C: "management", D: "awareness" },
      correct: "C",
      explanation: "\"time <b>management</b> techniques\" — cụm cố định \"time management\" (quản lý thời gian)."
    },
    { id: 18, section: "III", type: "mcq", passage: "lifestyleCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "or", B: "but", C: "so", D: "although" },
      correct: "A",
      explanation: "\"breaks and time for relaxation <b>or</b> hobbies\" — \"or\" nối hai lựa chọn tương đương (thư giãn hoặc làm sở thích)."
    },
    { id: 19, section: "III", type: "mcq", passage: "lifestyleCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "until", B: "because", C: "during", D: "while" },
      correct: "A",
      explanation: "\"delay less urgent activities <b>until</b> you've finished your important tasks\" — \"until\" (cho đến khi) phù hợp với việc trì hoãn việc kém gấp hơn."
    },
    { id: 20, section: "III", type: "mcq", passage: "lifestyleCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "confident", B: "overwhelmed", C: "independent", D: "creative" },
      correct: "B",
      explanation: "\"if you feel <b>overwhelmed</b>\" (cảm thấy quá tải) phù hợp với việc cho phép bản thân từ chối đôi khi."
    },
    { id: 21, section: "III", type: "mcq", passage: "lifestyleCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "in", B: "on", C: "at", D: "of" },
      correct: "D",
      explanation: "\"take advantage <b>of</b> something\" — cụm cố định \"take advantage of\" (tận dụng)."
    },
    { id: 22, section: "III", type: "mcq", passage: "lifestyleCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "mustn't", B: "shouldn't", C: "can't", D: "needn't" },
      correct: "C",
      explanation: "\"if you <b>can't</b> do everything perfectly\" (nếu bạn không thể làm mọi thứ hoàn hảo) phù hợp với lời khuyên đừng quá khắt khe với bản thân."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "lifestyleReading",
      prompt: "Teenagers are advised to do at least two types of physical activities on a regular basis.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Teenagers should aim to perform <b>two or more</b> of these activities regularly.\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "lifestyleReading",
      prompt: "A healthy diet for teenagers should completely exclude foods that contain sugar.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"a <b>small amount of sugary foods</b>\" vẫn được bao gồm trong chế độ ăn cân bằng, không phải loại bỏ hoàn toàn."
    },
    { id: 25, section: "IV", type: "truefalse", passage: "lifestyleReading",
      prompt: "Eating a balanced diet helps improve the way a person's brain works.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Having a balanced diet will result in <b>better brain function</b>...\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "lifestyleReading",
      prompt: "According to the passage, rest and sleep have exactly the same meaning.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"Many people think that rest and sleep are the same thing <b>but they are not</b>.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "lifestyleReading",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "The differences between sleep and rest for modern teenagers.",
        B: "How teenagers can achieve a balanced life through exercise, diet, and rest.",
        C: "The reasons why teenagers need more energy to function during the day.",
        D: "The best physical activities for teenagers to reduce stress and anxiety."
      },
      correct: "B",
      explanation: "Bài đọc trình bày ba yếu tố (tập thể dục, ăn uống, nghỉ ngơi) giúp thiếu niên có lối sống cân bằng → đáp án B bao quát nhất."
    },
    { id: 28, section: "IV", type: "mcq", passage: "lifestyleReading",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "Cycling and walking a dog are examples of good physical activities.",
        B: "Food is necessary for the human body to generate energy.",
        C: "Going on a holiday is considered a form of sleep to repair the body.",
        D: "Resting helps people reduce stress in their mind and body."
      },
      correct: "C",
      explanation: "Bài đọc nói ngược lại: đi nghỉ (holiday) là ví dụ của <b>rest</b> (nghỉ ngơi), không phải sleep (ngủ) — \"Rest is a time where your body relaxes such as when you go on a holiday\" → câu C SAI."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "You should find activities that you enjoy to stay ______________.",
      wordGiven: "motivate", accepted: ["motivated"], correct: "motivated",
      explanation: "Cần tính từ làm bổ ngữ sau \"stay\". <b>motivate</b> (v) → <b>motivated</b> (adj, +ed, có động lực)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "Eating a ______________ diet helps in maintaining energy levels.",
      wordGiven: "balance", accepted: ["balanced"], correct: "balanced",
      explanation: "Cần tính từ đứng trước danh từ \"diet\". <b>balance</b> (n/v) → <b>balanced</b> (adj, +ed, cân bằng)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The ______________ advised the student on how to reduce stress.",
      wordGiven: "counsel", accepted: ["counsellor", "counselor"], correct: "counsellor",
      explanation: "Cần danh từ chỉ người làm chủ ngữ. <b>counsel</b> (v, tư vấn) → <b>counsellor</b> (n, +or, người tư vấn/cố vấn)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "Regular exercise helps improve your physical ______________.",
      wordGiven: "fit", accepted: ["fitness"], correct: "fitness",
      explanation: "Cần danh từ làm tân ngữ sau tính từ \"physical\". <b>fit</b> (adj) → <b>fitness</b> (n, +ness, thể lực, sự khỏe mạnh)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "He felt ______________ about his future after passing the exam.",
      wordGiven: "optimist", accepted: ["optimistic"], correct: "optimistic",
      explanation: "Cần tính từ làm bổ ngữ sau \"felt\". <b>optimist</b> (n, người lạc quan) → <b>optimistic</b> (adj, +ic, lạc quan)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "High levels of ______________ can lead to poor health in teens.",
      wordGiven: "anxious", accepted: ["anxiety"], correct: "anxiety",
      explanation: "Cần danh từ làm chủ ngữ của câu. <b>anxious</b> (adj) → <b>anxiety</b> (n, sự lo âu)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "priorityEntry",
      prompt: "When you have too much work, you should learn how to ________________ to the most important tasks.",
      accepted: ["give priority"], correct: "give priority",
      explanation: "Từ điển cho ví dụ \"The government must <b>give priority</b> to education and healthcare.\" — khớp với ngữ cảnh ưu tiên cho các nhiệm vụ quan trọng nhất."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "priorityEntry",
      prompt: "For many students, getting good grades is their ________________ at school.",
      accepted: ["top priority"], correct: "top priority",
      explanation: "Từ điển cho ví dụ \"The company's <b>top priority</b> is to improve customer service.\" — khớp với ngữ cảnh ưu tiên hàng đầu của học sinh."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "Nam suggested cycling around the West Lake this weekend.",
      starter: "Nam said:",
      accepted: ["nam said: \"perhaps we should cycle around the west lake this weekend.\""],
      correct: "Nam said: \"Perhaps we should cycle around the West Lake this weekend.\"",
      explanation: "\"suggest + V-ing\" (đề nghị làm gì) có thể diễn đạt lại bằng câu trực tiếp \"<b>said: \"Perhaps we should + V\"</b>\" — cùng mang ý nghĩa đề xuất.<br>→ <i>Nam said: \"Perhaps we should cycle around the West Lake this weekend.\"</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "It is really difficult for students to give priority to work and school.",
      starter: "Giving priority",
      accepted: ["giving priority to work and school is really difficult for students"],
      correct: "Giving priority to work and school is really difficult for students.",
      explanation: "Chuyển chủ ngữ giả \"It is + adj + for sb + to V\" sang chủ ngữ thật là danh động từ \"<b>V-ing + is + adj + for sb</b>\" — cùng một ý nghĩa.<br>→ <i>Giving priority to work and school is really difficult for students.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "If you don't drink enough water, you will become dehydrated.",
      starter: "Unless",
      accepted: ["unless you drink enough water, you will become dehydrated"],
      correct: "Unless you drink enough water, you will become dehydrated.",
      explanation: "\"If ... don't ...\" chuyển thành \"<b>Unless</b> ...\" (nếu không) — bỏ \"don't\" vì \"unless\" đã mang nghĩa phủ định.<br>→ <i>Unless you drink enough water, you will become dehydrated.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "The team finally produced a good solution to the problem.",
      starter: "The team finally came",
      accepted: ["the team finally came up with a good solution to the problem"],
      correct: "The team finally came up with a good solution to the problem.",
      explanation: "\"produced a solution\" và \"<b>came up with</b> a solution\" là hai cách diễn đạt đồng nghĩa (đưa ra/tìm ra giải pháp).<br>→ <i>The team finally came up with a good solution to the problem.</i>"
    }
  ]
};
