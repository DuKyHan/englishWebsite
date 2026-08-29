const TEST = {
  id: "test29",
  grade: "Grade 6 — Global Success",
  unit: "Unit 3: My friends",
  title: "Grade 6 · Unit 3: My friends · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test29.html",
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
    { id: "VI", title: "Look at the dictionary entry of “friend”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    helenCloze: "I'm Max. My friend Helen is very beautiful. She is (17) ________ than me. She has blonde hair, chubby cheeks and round blue eyes. She's clever, patient and funny. She loves telling jokes. Her jokes are so (18) ________ that they make us laugh a lot. I love being (19) ________ her because she helps me with a lot of things. On the weekend, she often goes to my house and (20) ________ homework with me. But this weekend, we are going to the cinema to (21) ________ a new film, Annabelle. It (22) ________ be fun.",
    hoaThuReading: "My name is Hoa and my best friend is Thu. She is my classmate. We are both in grade 6 at Nguyen Hue Secondary School. Thu lives next to my house. Every day, my father takes us to school on his motorbike, and we come home on foot in the evening. She is an intelligent girl. Her favourite subject is Math, and she is really good at it. Mine is English. We usually help each other with our homework. Whenever I am sad, Thu always tells me stories to make me happy. I feel really lucky to have a best friend like Thu.",
    friendEntry: {
      word: "friend", ipa: "/frend/", pos: "noun",
      def: "A person who you know well and like, and who is not usually a member of your family.",
      examples: [
        "We've been <b>close friends</b> for years.",
        "She finds it difficult to <b>make friends</b> at her new school.",
        "He is a <b>friend of mine</b> from university.",
        "I'm going to <b>meet friends</b> for coffee this afternoon."
      ]
    }
  },
  images: {
    signNoBicycles: "assets/images/sign_no_bicycles.jpg",
    noticeFamilyPicnic: "assets/images/notice_family_picnic.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "maps", B: "phones", C: "makes", D: "streets" },
      correct: "B",
      explanation: "Phần gạch chân là đuôi \"-s\". \"maps\" /mæps/, \"makes\" /meɪks/, \"streets\" /striːts/ đều có \"-s\" phát âm là <b>/s/</b> (sau âm vô thanh). Riêng \"phones\" /foʊnz/ có \"-s\" phát âm là <b>/z/</b> (sau âm hữu thanh \"n\") → khác biệt, đáp án B."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "biscuit", B: "idea", C: "picnic", D: "caring" },
      correct: "B",
      explanation: "Phần gạch chân là chữ cái \"i\". \"biscuit\" /ˈbɪskɪt/, \"picnic\" /ˈpɪknɪk/, \"caring\" /ˈkeərɪŋ/ đều có \"i\" phát âm là <b>/ɪ/</b>. Riêng \"idea\" /aɪˈdiːə/ có \"i\" phát âm là <b>/aɪ/</b> → khác biệt, đáp án B."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "superb", B: "idea", C: "active", D: "about" },
      correct: "C",
      explanation: "\"superb\" /suːˈpɜːrb/, \"idea\" /aɪˈdiːə/, \"about\" /əˈbaʊt/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"active\" /ˈæktɪv/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án C."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "badminton", B: "violin", C: "leadership", D: "confident" },
      correct: "B",
      explanation: "\"badminton\" /ˈbædmɪntən/, \"leadership\" /ˈliːdərʃɪp/, \"confident\" /ˈkɑːnfɪdənt/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"violin\" /ˌvaɪəˈlɪn/ có trọng âm rơi vào <b>âm tiết cuối</b> → khác biệt, đáp án B."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Hoa: \"There's nothing more we can do here. Let's ______ home, Thu.\"",
      prompt: "Thu: \"OK, my dad is waiting outside on his motorbike.\"",
      display: { A: "make", B: "watch", C: "go", D: "have" },
      correct: "C",
      explanation: "\"Let's <b>go</b> home\" (Chúng ta hãy về nhà) phù hợp với việc bố của Thu đang đợi ngoài để đưa họ về."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Max: \"What does your friend Helen look like?\"",
      prompt: "Anna: \"She has short blonde hair and big blue ______.\"",
      display: { A: "mouth", B: "hands", C: "eyes", D: "cheeks" },
      correct: "C",
      explanation: "\"big blue <b>eyes</b>\" (đôi mắt xanh to) là cụm miêu tả ngoại hình quen thuộc, phù hợp với tính từ chỉ màu sắc \"blue\"."
    },
    { id: 7, section: "I", type: "mcq",
      context: "John: \"Tom can wait hours for his friends without getting angry.\"",
      prompt: "Nam: \"Yes, he is a very ______ boy.\"",
      display: { A: "hard-working", B: "free", C: "lazy", D: "patient" },
      correct: "D",
      explanation: "\"wait hours ... without getting angry\" (chờ đợi hàng giờ mà không tức giận) mô tả tính cách \"<b>patient</b>\" (kiên nhẫn)."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Mother: \"Please be ______ when you have to use fire to cook, Max.\"",
      prompt: "Max: \"Yes, Mom. I will use the stove carefully.\"",
      display: { A: "shy", B: "smile", C: "careful", D: "fun" },
      correct: "C",
      explanation: "Khi dùng lửa để nấu ăn cần \"<b>careful</b>\" (cẩn thận) — khớp với \"use the stove carefully\" trong câu trả lời."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Hoa: \"I'm ______ a party next weekend. Would you like to come?\"",
      prompt: "Thu: \"I'd love to! Thank you for inviting me.\"",
      display: { A: "to have", B: "have", C: "having", D: "has" },
      correct: "C",
      explanation: "\"I'm <b>having</b> a party\" — thì hiện tại tiếp diễn (be + V-ing) diễn tả một kế hoạch/dự định đã sắp xếp trong tương lai gần."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Doctor: \"Some people were badly injured in the accident and needed medical ______.\"",
      prompt: "Nurse: \"Yes, we are preparing the equipment to help them now.\"",
      display: { A: "car", B: "care", C: "what", D: "need" },
      correct: "B",
      explanation: "\"medical <b>care</b>\" (sự chăm sóc y tế) là cụm từ cố định, phù hợp với người bị thương cần được giúp đỡ."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Tom: \"Patrick is very ______. He always does well in difficult tests.\"",
      prompt: "Ben: \"I know, he is the smartest student in our English class.\"",
      display: { A: "short", B: "funny", C: "clever", D: "loving" },
      correct: "C",
      explanation: "\"the smartest student\" gợi ý tính từ \"<b>clever</b>\" (thông minh), phù hợp với việc luôn làm tốt các bài kiểm tra khó."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Minh: \"What are you doing this weekend, Hoa?\"",
      prompt: "Hoa: ______",
      display: {
        A: "I always go to school.",
        B: "I'm visiting my grandparents.",
        C: "I'm eating lunch with my friends now.",
        D: "I don't go out at the weekend."
      },
      correct: "B",
      explanation: "Câu hỏi dùng thì hiện tại tiếp diễn để hỏi về kế hoạch cuối tuần (\"this weekend\") nên câu trả lời cũng cần diễn tả kế hoạch tương tự: \"<b>I'm visiting my grandparents.</b>\""
    },
    { id: 13, section: "I", type: "mcq",
      context: "Tim: \"Would you like to go for a drink after school?\"",
      prompt: "Lan: ______",
      display: { A: "No, I don't.", B: "It's fine.", C: "You're welcome.", D: "Yes, I'd love to." },
      correct: "D",
      explanation: "\"Would you like to...?\" là lời mời/rủ; \"<b>Yes, I'd love to.</b>\" là cách nhận lời phù hợp nhất."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Max: \"How about going camping on Mount Everest this summer?\"",
      prompt: "Helen: ______",
      display: {
        A: "Yes, let's going now.",
        B: "That's a great idea, but it's too dangerous!",
        C: "No, we don't.",
        D: "You're right."
      },
      correct: "B",
      explanation: "\"How about + V-ing?\" là lời đề nghị; phản hồi hợp lý nhất là vừa đồng tình với ý tưởng vừa nêu lý do e ngại: \"<b>That's a great idea, but it's too dangerous!</b>\""
    },

    // ---------------- SECTION II (15-16) — sign & notice ----------------
    { id: 15, section: "II", type: "mcq", image: "signNoBicycles",
      prompt: "What does this sign say?",
      display: {
        A: "You can park your bike here.",
        B: "You must carry your bicycle.",
        C: "Parking bikes is encouraged here.",
        D: "Bicycles are not allowed here."
      },
      correct: "D",
      explanation: "Biểu tượng xe đạp bị gạch chéo trong vòng tròn đỏ → biển báo cấm xe đạp: \"<b>Bicycles are not allowed here.</b>\""
    },
    { id: 16, section: "II", type: "mcq", image: "noticeFamilyPicnic",
      prompt: "What is the message of this note?",
      display: {
        A: "A picnic at the park next Saturday.",
        B: "A family dinner at a luxury restaurant.",
        C: "A family picnic at the park this Saturday.",
        D: "A family gathering at a local cafe."
      },
      correct: "C",
      explanation: "Tờ thông báo ghi \"Family Picnic at the Park! This Saturday at 10:00 AM\" → buổi dã ngoại gia đình tại công viên vào <b>thứ Bảy này</b> (this Saturday, không phải \"next Saturday\") → đáp án C."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "helenCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "taller", B: "tallest", C: "more tall", D: "tall" },
      correct: "A",
      explanation: "Sau \"than me\" cần dạng so sánh hơn: \"<b>taller</b> than me\" (tính từ ngắn + đuôi \"-er\")."
    },
    { id: 18, section: "III", type: "mcq", passage: "helenCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "boring", B: "funny", C: "serious", D: "sad" },
      correct: "B",
      explanation: "\"Her jokes are so <b>funny</b> that they make us laugh a lot\" — tính từ \"funny\" (buồn cười) phù hợp với việc chọc cười mọi người."
    },
    { id: 19, section: "III", type: "mcq", passage: "helenCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "for", B: "with", C: "by", D: "to" },
      correct: "B",
      explanation: "\"being <b>with</b> her\" — giới từ \"with\" đi cùng động từ \"be\" để diễn tả ở cùng ai đó."
    },
    { id: 20, section: "III", type: "mcq", passage: "helenCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "takes", B: "makes", C: "does", D: "plays" },
      correct: "C",
      explanation: "\"<b>does</b> homework\" là cụm động từ cố định (làm bài tập về nhà)."
    },
    { id: 21, section: "III", type: "mcq", passage: "helenCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "notice", B: "see", C: "look", D: "watch" },
      correct: "D",
      explanation: "\"go to the cinema to <b>watch</b> a new film\" là cụm từ quen thuộc để nói về việc xem phim tại rạp."
    },
    { id: 22, section: "III", type: "mcq", passage: "helenCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "can", B: "would", C: "should", D: "will" },
      correct: "D",
      explanation: "\"It <b>will</b> be fun\" — dùng \"will\" để đưa ra dự đoán về tương lai."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "hoaThuReading",
      prompt: "Hoa and Thu are in different classes at school.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"We are both in grade 6... She is my classmate.\" — Hoa và Thu học cùng lớp, không phải khác lớp."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "hoaThuReading",
      prompt: "Hoa's father drives the girls to school every day.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Every day, my father takes us to school on his motorbike.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "hoaThuReading",
      prompt: "Thu and Hoa walk home together in the evening.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"we come home on foot in the evening\" — \"on foot\" nghĩa là đi bộ."
    },
    { id: 26, section: "IV", type: "truefalse", passage: "hoaThuReading",
      prompt: "Thu's favourite subject at school is English.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"Her favourite subject is Math\" — môn yêu thích của Thu là Toán; tiếng Anh mới là môn yêu thích của Hoa."
    },
    { id: 27, section: "IV", type: "mcq", passage: "hoaThuReading",
      prompt: "What do Hoa and Thu usually do together?",
      display: { A: "They help each other with homework.", B: "They go to the cinema.", C: "They play sports after school.", D: "They cook dinner for their families." },
      correct: "A",
      explanation: "Bài đọc: \"We usually help each other with our homework.\" → đáp án A."
    },
    { id: 28, section: "IV", type: "mcq", passage: "hoaThuReading",
      prompt: "What does Thu do when Hoa is sad?",
      display: { A: "She tells Hoa stories to make her happy.", B: "She buys a gift for Hoa.", C: "She calls Hoa's father.", D: "She visits Hoa's house to do Math." },
      correct: "A",
      explanation: "Bài đọc: \"Whenever I am sad, Thu always tells me stories to make me happy.\" → đáp án A."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "Helen is very beautiful, and her ______________ always catches everyone's attention.",
      wordGiven: "APPEAR", accepted: ["appearance"], correct: "appearance",
      explanation: "Cần danh từ đứng sau tính từ sở hữu \"her\". <b>appear</b> (v) → <b>appearance</b> (n, +ance, vẻ ngoài/ngoại hình)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "My grandmother has a round face with long ______________ hair.",
      wordGiven: "WHITEN", accepted: ["whitish"], correct: "whitish",
      explanation: "Cần tính từ đứng trước danh từ \"hair\". <b>whiten</b> (v, làm trắng) → <b>whitish</b> (adj, +ish, hơi trắng/ngả trắng)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The camp leaders are very ______________ and help us take part in many activities.",
      wordGiven: "FRIEND", accepted: ["friendly"], correct: "friendly",
      explanation: "Cần tính từ đứng sau \"very\". <b>friend</b> (n) → <b>friendly</b> (adj, +ly, thân thiện)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "Lan felt very ______________ before standing on stage to sing in front of the school.",
      wordGiven: "SHYNESS", accepted: ["shy"], correct: "shy",
      explanation: "Cần tính từ đứng sau \"felt very\". <b>shyness</b> (n, sự nhút nhát) → <b>shy</b> (adj, nhút nhát)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "Thu always listens to her friends' problems ______________, which makes her a great listener.",
      wordGiven: "PATIENT", accepted: ["patiently"], correct: "patiently",
      explanation: "Cần trạng từ bổ nghĩa cho động từ \"listens\". <b>patient</b> (adj) → <b>patiently</b> (adv, +ly, một cách kiên nhẫn)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "The teacher asked the students to ______________ the lines before painting the picture.",
      wordGiven: "STRAIGHT", accepted: ["straighten"], correct: "straighten",
      explanation: "Cần động từ đứng sau \"to\". <b>straight</b> (adj, thẳng) → <b>straighten</b> (v, +en, làm cho thẳng)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "friendEntry",
      prompt: "I don't have any plans today except to ___________________ at the shopping mall.",
      accepted: ["meet friends"], correct: "meet friends",
      explanation: "Từ điển cho ví dụ \"I'm going to <b>meet friends</b> for coffee this afternoon.\" — khớp với ngữ cảnh không có kế hoạch gì ngoài việc gặp gỡ bạn bè."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "friendEntry",
      prompt: "They always help each other because they have been ___________________ since childhood.",
      accepted: ["close friends"], correct: "close friends",
      explanation: "Từ điển cho ví dụ \"We've been <b>close friends</b> for years.\" — khớp với ngữ cảnh bạn bè thân thiết từ nhỏ."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "Do you want to go for a drink with me after class?",
      starter: "Would you like",
      accepted: ["would you like to go for a drink with me after class"],
      correct: "Would you like to go for a drink with me after class?",
      explanation: "\"want to + V\" (muốn làm gì) có thể viết lại lịch sự hơn bằng \"<b>would like to + V</b>\", giữ nguyên nghĩa mời/hỏi.<br>→ <i>Would you like to go for a drink with me after class?</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "How about going camping on Mount Everest this Saturday?",
      starter: "Why don't we",
      accepted: ["why don't we go camping on mount everest this saturday"],
      correct: "Why don't we go camping on Mount Everest this Saturday?",
      explanation: "\"How about + V-ing?\" (lời đề nghị) có nghĩa tương đương với \"<b>Why don't we + V?</b>\" (Sao chúng ta không...?).<br>→ <i>Why don't we go camping on Mount Everest this Saturday?</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "Are you doing anything this Saturday evening?",
      starter: "Do you have any",
      accepted: ["do you have any plans for this saturday evening", "do you have anything to do this saturday evening"],
      correct: "Do you have any plans for this Saturday evening?",
      explanation: "\"be doing + something?\" (thì hiện tại tiếp diễn hỏi về kế hoạch) có nghĩa tương đương với \"<b>Do you have any plans / anything to do...?</b>\"<br>→ <i>Do you have any plans for this Saturday evening?</i> (hoặc: <i>Do you have anything to do this Saturday evening?</i>)"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "Our teacher asked us to write emails in English.",
      starter: "Our teacher suggested that we",
      accepted: ["our teacher suggested that we should write emails in english", "our teacher suggested that we write emails in english"],
      correct: "Our teacher suggested that we should write emails in English.",
      explanation: "\"ask sb to + V\" (yêu cầu ai làm gì) có thể viết lại bằng cấu trúc gợi ý \"<b>suggest that + S + (should) + V</b>\" (đề nghị rằng...).<br>→ <i>Our teacher suggested that we should write emails in English.</i> (hoặc: <i>...that we write emails in English.</i>)"
    }
  ]
};
