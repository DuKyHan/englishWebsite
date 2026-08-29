const TEST = {
  id: "test17",
  grade: "Grade 9 — Global Success",
  unit: "Unit 3: Healthy living for teens",
  title: "Grade 9 · Unit 3: Healthy living for teens · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test17.html",
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
    { id: "VI", title: "Look at the dictionary entry of “deadline”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    balanceCloze: "When I was at school, I had to learn how to have a well-balanced life in order to reduce stress and anxiety. Here are some of the typical things I did. Firstly, I managed my time properly. Therefore, I started to plan my schedule, made a weekly work list and (17) ________ priority to some of my work. This helped me concentrate my efforts on my most important tasks. In addition, I communicated (18) ________ my family, friends, and teachers about my busy schedule and problems, so they would offer me additional support. I also took breaks (19) ________ because they helped me keep away from stress and anxiety and gave my brain a rest and improved my happiness. Finally, I looked after my physical health. I (20) ________ at least eight hours of sleep a day. I played football with my classmates twice a week and went for a walk with my grandparents early every morning. Besides, I also tried to follow (21) ________ healthy diet. I ate a lot of fruit and vegetables. I ate little fattening foods and (22) ________ junk food like chips, cookies, pizza, etc.",
    balanceReading: "Balance is key for Mary, a busy teenager. She uses an app to stay organized with her assignments and deadlines; the app helps her receive reminders to ensure she doesn't forget anything. Mary also makes a daily to-do list to help her stay focused and motivated. She's mindful of not spending too much time on online social media, limiting her usage to an hour each day to avoid wasting her time. On weekends, Mary enjoys relaxing and socializing with friends, going to the cinema, shopping, or just hanging out. She also does some volunteer work at a local charity, which provides valuable academic experience and looks great on her CV. James, an adult working a nine-to-five job, is also aware of the importance of time management. He starts his day by making a to-do list, prioritizing the most urgent or difficult tasks first when he has the most energy. To avoid distractions, James turns off email and social media notifications on his phone and closes his office door, allowing him to concentrate. On the day when he must work overtime, he quickly rearranges his tasks and makes sure everything gets completed on time. When at home, James spends his quality time with his family, playing games or going to the park with his two young children. James and his wife share the housework, taking turns cooking and cleaning, ensuring a great work-life balance. In his free time, James keeps fit by playing football with friends and going to the gym, which helps him relax and clear his mind.",
    deadlineEntry: {
      word: "deadline", ipa: "/ˈdedlaɪn/", pos: "noun",
      def: "a point in time by which something must be done",
      examples: [
        "The <b>deadline for</b> applications is next Friday.",
        "It is difficult to <b>meet the deadline</b> when you have too much work.",
        "We are working hard to <b>finish by the deadline</b>.",
        "I'm afraid I'm going to <b>miss the deadline</b> because my computer broke.",
        "They decided to <b>extend the deadline</b> by one week to give students more time."
      ]
    }
  },
  images: {
    signTimeLimit: "assets/images/sign_time_limit.jpg",
    signLunchtimeYoga: "assets/images/sign_lunchtime_yoga.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "additional", B: "accomplish", C: "anxiety", D: "assignment" },
      correct: "C",
      explanation: "Phần gạch chân là chữ cái đầu \"a\". \"additional\" /əˈdɪʃənl/, \"accomplish\" /əˈkʌmplɪʃ/, \"assignment\" /əˈsaɪnmənt/ đều có \"a\" phát âm là <b>/ə/</b>. Riêng \"anxiety\" /æŋˈzaɪəti/ có \"a\" phát âm là <b>/æ/</b> → khác biệt, đáp án C."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "distraction", B: "educate", C: "study", D: "deadline" },
      correct: "D",
      explanation: "\"distraction\", \"educate\", \"study\" có phụ âm \"d\" được gạch chân phát âm giống nhau. Riêng \"deadline\" /ˈdedlaɪn/ có \"d\" đầu từ được phát âm khác biệt so với ba từ còn lại → đáp án D."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "delay", B: "awake", C: "mental", D: "advise" },
      correct: "C",
      explanation: "\"delay\" /dɪˈleɪ/, \"awake\" /əˈweɪk/, \"advise\" /ədˈvaɪz/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"mental\" /ˈmentl/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án C."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "important", B: "emotion", C: "cognitive", D: "abandon" },
      correct: "C",
      explanation: "\"important\" /ɪmˈpɔːrtnt/, \"emotion\" /ɪˈmoʊʃn/, \"abandon\" /əˈbændən/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"cognitive\" /ˈkɒɡnətɪv/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án C."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"You look so fresh today! What's your secret?\"",
      prompt: "Nam: \"I ______ a healthy diet with lots of fruits and vegetables lately.\"",
      display: { A: "have been following", B: "was following", C: "follow", D: "followed" },
      correct: "A",
      explanation: "\"lately\" (gần đây) là dấu hiệu của thì <b>hiện tại hoàn thành tiếp diễn</b> (have/has been + V-ing), diễn tả hành động bắt đầu trong quá khứ và vẫn tiếp diễn đến hiện tại."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Anna: \"Why are you so stressed about the project?\"",
      prompt: "Minh: \"I haven't handed ______ my assignment yet, and the deadline is today.\"",
      display: { A: "up", B: "in", C: "into", D: "on" },
      correct: "B",
      explanation: "\"hand <b>in</b> the assignment\" (nộp bài tập) là cụm động từ cố định, phù hợp với ngữ cảnh chưa nộp bài trước deadline."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Teacher: \"Why did you decide to stop taking the Art class?\"",
      prompt: "Lan: \"I'm not good at it, so I am ______ the subject to focus on French.\"",
      display: { A: "dropping", B: "taking", C: "attending", D: "marking" },
      correct: "A",
      explanation: "\"<b>dropping</b> the subject\" (bỏ môn học) phù hợp với việc không giỏi môn Nghệ thuật và muốn tập trung vào tiếng Pháp."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Mom: \"You should ______ a weekly schedule to manage your time better.\"",
      prompt: "Son: \"Yes, I'll start planning my tasks this weekend, Mom.\"",
      display: { A: "carry on", B: "carry away", C: "carry through", D: "carry out" },
      correct: "D",
      explanation: "\"<b>carry out</b> a weekly schedule\" (thực hiện một thời gian biểu hằng tuần) phù hợp với việc lên kế hoạch để quản lý thời gian tốt hơn."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Huy: \"Who is the person ______ helped you with your time management?\"",
      prompt: "Ba: \"It's my school counselor. She gave me great advice.\"",
      display: { A: "whose", B: "whom", C: "which", D: "who" },
      correct: "D",
      explanation: "\"the person <b>who</b> helped you\" — đại từ quan hệ chỉ người làm chủ ngữ trong mệnh đề quan hệ là \"who\", thay cho \"the person\"."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Doctor: \"To have a balanced life, you need to be a ______ person.\"",
      prompt: "Patient: \"I agree. I will try to exercise and eat well every day.\"",
      display: { A: "healthily", B: "unhealthy", C: "healthy", D: "health" },
      correct: "C",
      explanation: "Cần tính từ đứng trước danh từ \"person\". <b>healthy</b> (adj) = khỏe mạnh, phù hợp với việc tập thể dục và ăn uống điều độ."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Linh: \"______ I have a lot of homework, I still make time for relaxation.\"",
      prompt: "Mai: \"That's good! It helps you avoid feeling overwhelmed.\"",
      display: { A: "Although", B: "Because", C: "Unless", D: "If" },
      correct: "A",
      explanation: "\"<b>Although</b> I have a lot of homework, I still...\" — liên từ chỉ sự tương phản, phù hợp với việc vẫn dành thời gian thư giãn dù có nhiều bài tập."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Khoa: \"What do you do to improve your ______ health?\"",
      prompt: "An: \"I usually play football or go for a walk in the park.\"",
      display: { A: "additional", B: "mental", C: "physical", D: "social" },
      correct: "C",
      explanation: "\"<b>physical</b> health\" (sức khỏe thể chất) phù hợp với các hoạt động chơi bóng đá và đi bộ trong công viên."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Mary: \"Shall we have a drink when you finish your talk?\"",
      prompt: "John: \"______\"",
      display: { A: "All right, I'd love to.", B: "You needn't do that.", C: "No, you can't.", D: "You're welcome." },
      correct: "A",
      explanation: "\"<b>All right, I'd love to.</b>\" là cách đồng ý lời mời/đề nghị một cách lịch sự và tự nhiên."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Teacher: \"Why didn't you attend the yoga class yesterday?\"",
      prompt: "Student: \"______\"",
      display: { A: "The room is at the end of the hall.", B: "I think I will join it next Tuesday.", C: "I'm sorry, I was busy with my assignments.", D: "Yoga is good for my mental health." },
      correct: "C",
      explanation: "Câu hỏi \"Why didn't you attend...?\" cần một lời giải thích/xin lỗi phù hợp. \"<b>I'm sorry, I was busy with my assignments.</b>\" trả lời trực tiếp lý do vắng mặt."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signTimeLimit",
      prompt: "What does this sign tell you?",
      display: {
        A: "You have unlimited time to finish.",
        B: "You should arrive late.",
        C: "Do not waste your time.",
        D: "You have a limited amount of time to finish."
      },
      correct: "D",
      explanation: "Biển ghi \"TIME LIMIT: 30 MINS\" → em chỉ có một khoảng thời gian giới hạn (30 phút) để hoàn thành, đáp án D."
    },
    { id: 16, section: "II", type: "mcq", image: "signLunchtimeYoga",
      prompt: "What does the notice say?",
      display: {
        A: "Everyone in school can join at once.",
        B: "You must be at least 20 years old to join.",
        C: "The class lasts for 20 minutes.",
        D: "Only a maximum of 20 people can join the class."
      },
      correct: "D",
      explanation: "Biển ghi \"LUNCHTIME YOGA — MAX 20 PEOPLE\" → lớp yoga giờ ăn trưa chỉ nhận tối đa 20 người, đáp án D."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "balanceCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "took", B: "gave", C: "made", D: "did" },
      correct: "B",
      explanation: "\"<b>gave</b> priority to some of my work\" — cụm cố định \"give priority to\" (ưu tiên cho việc gì)."
    },
    { id: 18, section: "III", type: "mcq", passage: "balanceCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "with", B: "to", C: "for", D: "about" },
      correct: "A",
      explanation: "\"communicated <b>with</b> my family, friends, and teachers\" — cụm cố định \"communicate with someone\" (giao tiếp/trao đổi với ai)."
    },
    { id: 19, section: "III", type: "mcq", passage: "balanceCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "appropriately", B: "fortunately", C: "accidentally", D: "smoothly" },
      correct: "A",
      explanation: "\"took breaks <b>appropriately</b>\" (nghỉ ngơi một cách hợp lý) phù hợp với việc giúp giảm stress và cải thiện tâm trạng."
    },
    { id: 20, section: "III", type: "mcq", passage: "balanceCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "get", B: "got", C: "gets", D: "getting" },
      correct: "B",
      explanation: "Đoạn văn kể lại các việc đã làm trong quá khứ (managed, started, communicated, took...), nên cần thì quá khứ đơn: \"I <b>got</b> at least eight hours of sleep a day.\""
    },
    { id: 21, section: "III", type: "mcq", passage: "balanceCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "a", B: "an", C: "the", D: "no article" },
      correct: "A",
      explanation: "\"follow <b>a</b> healthy diet\" — mạo từ \"a\" đứng trước danh từ đếm được số ít bắt đầu bằng phụ âm \"healthy\" /h/."
    },
    { id: 22, section: "III", type: "mcq", passage: "balanceCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "refused", B: "denied", C: "avoided", D: "disliked" },
      correct: "C",
      explanation: "\"<b>avoided</b> junk food\" (tránh đồ ăn vặt) phù hợp với việc duy trì chế độ ăn uống lành mạnh."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "balanceReading",
      prompt: "Mary spends more than two hours every day checking her social media accounts.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"limiting her usage to <b>an hour each day</b>\" — chỉ dùng mạng xã hội một giờ mỗi ngày, không phải hơn hai giờ."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "balanceReading",
      prompt: "Doing volunteer work at a local charity helps Mary improve her CV.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"volunteer work at a local charity, which ... <b>looks great on her CV</b>.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "balanceReading",
      prompt: "James prefers to solve the easiest tasks at the beginning of his workday.",
      correct: "False",
      explanation: "Sai. Bài đọc: James \"<b>prioritizing the most urgent or difficult tasks first</b>\" — ưu tiên việc khó/gấp nhất trước, không phải việc dễ nhất."
    },
    { id: 26, section: "IV", type: "truefalse", passage: "balanceReading",
      prompt: "James and his wife share domestic chores to maintain a good work-life balance.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"James and his wife <b>share the housework</b>, taking turns cooking and cleaning, ensuring a great work-life balance.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "balanceReading",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "The differences in daily entertainment choices between teenagers and adults.",
        B: "How a teenager and an adult manage their time to achieve balance in life.",
        C: "The negative impacts of social media notifications on work and study.",
        D: "The importance of sharing housework and playing sports in a family."
      },
      correct: "B",
      explanation: "Bài đọc kể về cách Mary (thiếu niên) và James (người lớn) quản lý thời gian để đạt được sự cân bằng trong cuộc sống → đáp án B bao quát nhất."
    },
    { id: 28, section: "IV", type: "mcq", passage: "balanceReading",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "Mary uses a mobile application to get reminders about her deadlines.",
        B: "James sometimes has to work extra hours but still finishes his tasks on time.",
        C: "James always leaves his office door open to communicate with his colleagues.",
        D: "Going to the gym and playing football help James clear his mind."
      },
      correct: "C",
      explanation: "Bài đọc nói ngược lại: James \"<b>closes his office door</b>, allowing him to concentrate\" (đóng cửa phòng để tập trung) — không phải luôn mở cửa → câu C SAI."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "If you follow a ______________ schedule, you will feel much better.",
      wordGiven: "regularity", accepted: ["regular"], correct: "regular",
      explanation: "Cần tính từ đứng trước danh từ \"schedule\". <b>regularity</b> (n) → <b>regular</b> (adj, đều đặn)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "Creating a ______________ bedtime routine can help you fall asleep faster.",
      wordGiven: "calmness", accepted: ["calm"], correct: "calm",
      explanation: "Cần tính từ đứng trước danh từ \"bedtime routine\". <b>calmness</b> (n) → <b>calm</b> (adj, êm dịu, thư thái)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "______________ activity is very beneficial for teenagers' development.",
      wordGiven: "physics", accepted: ["physical"], correct: "Physical",
      explanation: "Cần tính từ đứng trước danh từ \"activity\" làm chủ ngữ. <b>physics</b> (n, môn vật lý) → <b>physical</b> (adj, thuộc về thể chất)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "Regular exercise helps in ______________ stress effectively.",
      wordGiven: "manage", accepted: ["managing"], correct: "managing",
      explanation: "Cần danh động từ sau giới từ \"in\". <b>manage</b> (v) → <b>managing</b> (v-ing, quản lý)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "He felt ______________ because he couldn't finish his assignment on time.",
      wordGiven: "anxiety", accepted: ["anxious"], correct: "anxious",
      explanation: "Cần tính từ làm bổ ngữ sau \"felt\". <b>anxiety</b> (n) → <b>anxious</b> (adj, lo lắng)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "The teacher gave us an ______________ talk on how to stay focused in class.",
      wordGiven: "educate", accepted: ["educational"], correct: "educational",
      explanation: "Cần tính từ đứng trước danh từ \"talk\". <b>educate</b> (v) → <b>educational</b> (adj, +ional, mang tính giáo dục)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "deadlineEntry",
      prompt: "The teacher agreed to ____________________ so we can finish our project.",
      accepted: ["extend the deadline"], correct: "extend the deadline",
      explanation: "Từ điển cho ví dụ \"They decided to <b>extend the deadline</b> by one week...\" — khớp với ngữ cảnh giáo viên đồng ý gia hạn để hoàn thành dự án."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "deadlineEntry",
      prompt: "If you don't plan your schedule well, you might ____________________ for your project.",
      accepted: ["miss the deadline"], correct: "miss the deadline",
      explanation: "Từ điển cho ví dụ \"I'm afraid I'm going to <b>miss the deadline</b> because my computer broke.\" — khớp với ngữ cảnh không lên kế hoạch tốt sẽ trễ hạn."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "It is important to take care of both physical and mental health.",
      starter: "Taking",
      accepted: ["taking care of both physical and mental health is important"],
      correct: "Taking care of both physical and mental health is important.",
      explanation: "Chuyển chủ ngữ giả \"It is + adj + to V\" sang chủ ngữ thật là danh động từ \"<b>V-ing + is + adj</b>\" — cùng một ý nghĩa.<br>→ <i>Taking care of both physical and mental health is important.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "If you don't manage your time well, you will feel stressed out.",
      starter: "Unless",
      accepted: ["unless you manage your time well, you will feel stressed out"],
      correct: "Unless you manage your time well, you will feel stressed out.",
      explanation: "\"If ... don't ...\" chuyển thành \"<b>Unless</b> ...\" (nếu không) — bỏ \"don't\" vì \"unless\" đã mang nghĩa phủ định.<br>→ <i>Unless you manage your time well, you will feel stressed out.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "I haven't played football with my classmates for two weeks.",
      starter: "The last time",
      accepted: ["the last time i played football with my classmates was two weeks ago"],
      correct: "The last time I played football with my classmates was two weeks ago.",
      explanation: "\"haven't done st for + khoảng thời gian\" chuyển thành \"<b>The last time + S + V(ed) + was + khoảng thời gian + ago</b>\" — cùng diễn tả lần cuối cùng thực hiện hành động.<br>→ <i>The last time I played football with my classmates was two weeks ago.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "Your brother might get tired tomorrow because he stays up late tonight.",
      starter: "If",
      accepted: ["if your brother stays up late tonight, he might get tired tomorrow"],
      correct: "If your brother stays up late tonight, he might get tired tomorrow.",
      explanation: "\"might + V + because + S + V(hiện tại)\" chuyển thành câu điều kiện \"<b>If + S + V(hiện tại), S + might + V</b>\" — cùng diễn tả khả năng xảy ra do một nguyên nhân.<br>→ <i>If your brother stays up late tonight, he might get tired tomorrow.</i>"
    }
  ]
};
