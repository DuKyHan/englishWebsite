const TEST = {
  id: "test08",
  grade: "Grade 8 — Global Success",
  unit: "Unit 1: Leisure time",
  title: "Grade 8 · Unit 1: Leisure time · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test08.html",
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
    { id: "VI", title: "Look at the dictionary entry of “pastime”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    relaxCloze: "How do people relax in other countries? People in the U.S. do a lot of activities to relax, ranging from television viewing, reading, doing any one of (17) ________ handicrafts, and getting into sports and exercise. Americans love their free time. Sharing some relaxing activities with other cultures, people living in Germany love (18) ________ out at the beach. Another famous German pastime is frequenting saunas and hot tubs. The British prefer gardening, swimming, watching TV, going to the theatre. In Russia, people like to get away to dachas in the countryside. Dachas, known as cottages, are typically found (19) ________ the outskirts of cities and towns in Russia. They (20) ________ want to visit beautiful (21) ________ near lakes or forests. Russian people (22) ________ love to go to the swimming pools, concerts, and football matches.",
    bathReading: "<b>Take a Bath!</b><br><br>Traveling is fun because you can see how people in other parts of the world live. One thing travelers don't often think about before traveling is how other cultures bathe. And bathrooms in many countries may be different from the kind you are used to.<br><br>In the United States, most people take a shower once a day in the morning. The showerhead is usually mounted on the wall and cannot be moved. The bather simply stands under the water, gets wet, scrubs with soap and often a washcloth, and then rinses off.<br><br>Children often take a bath each night and enjoy playing with small toys such as boats and rubber ducks. Many adults, especially women, enjoy a soothing bath to get rid of stress at the end of the day.<br><br>It is important to remember that when you take a shower or bath in the United States, you should be careful to keep the water inside the bathtub or shower. Unlike bathrooms in many countries, there is no drain in the floor. If water gets on the floor it cannot go anywhere and must be cleaned up with a towel or mop. It can also cause problems for the floor. So be careful.",
    pastimeEntry: {
      word: "pastime", ipa: "/ˈpæstaɪm/", pos: "noun",
      def: "Something that you enjoy doing when you are not working. SYNONYM hobby",
      examples: [
        "Watching television is still the nation's <b>favorite pastime</b>.",
        "Gardening is a <b>popular pastime</b> among older people.",
        "For many people, photography is a <b>pleasant pastime</b> to relieve stress.",
        "Cooking has become a <b>profitable pastime</b> for her since she started selling her bakes."
      ]
    }
  },
  images: {
    signNoCash: "assets/images/sign_no_cash.jpg",
    signSilentMode: "assets/images/sign_silent_mode.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "cool", B: "wool", C: "spoon", D: "tool" },
      correct: "B",
      explanation: "Chữ \"oo\" trong \"cool\" /kuːl/, \"spoon\" /spuːn/, \"tool\" /tuːl/ đều phát âm là <b>/uː/</b>. Riêng \"wool\" /wʊl/ có \"oo\" phát âm là <b>/ʊ/</b> → khác biệt, đáp án B."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "include", B: "pudding", C: "push", D: "cushion" },
      correct: "A",
      explanation: "Chữ \"u\" trong \"pudding\" /ˈpʊdɪŋ/, \"push\" /pʊʃ/, \"cushion\" /ˈkʊʃn/ đều phát âm là <b>/ʊ/</b>. Riêng \"include\" /ɪnˈkluːd/ có \"u\" phát âm là <b>/uː/</b> → khác biệt, đáp án A."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "detest", B: "prefer", C: "fancy", D: "dislike" },
      correct: "C",
      explanation: "\"detest\" /dɪˈtest/, \"prefer\" /prɪˈfɜːr/, \"dislike\" /dɪsˈlaɪk/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"fancy\" /ˈfænsi/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án C."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "museum", B: "library", C: "favourite", D: "melody" },
      correct: "A",
      explanation: "\"library\" /ˈlaɪbreri/, \"favourite\" /ˈfeɪvərɪt/, \"melody\" /ˈmelədi/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"museum\" /mjuˈziːəm/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án A."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"Do you think ______ differences can cause misunderstandings between people?\"",
      prompt: "Lan: \"Yes, definitely. The way people from different countries communicate is so unique.\"",
      display: { A: "culturing", B: "culturally", C: "cultural", D: "culture" },
      correct: "C",
      explanation: "Cần tính từ đứng trước danh từ \"differences\". <b>culture</b> (n) → <b>cultural</b> (adj, +al): thuộc về văn hóa."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Hoa: \"You looked so focused this afternoon. What were you doing?\"",
      prompt: "Nam: \"I spent hours on a DIY project, but I'm still not ______ with the final result.\"",
      display: { A: "satisfaction", B: "satisfied", C: "satisfy", D: "satisfactory" },
      correct: "B",
      explanation: "\"be <b>satisfied</b> with sth\" (hài lòng với điều gì) là cụm tính từ + giới từ cố định."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Mai: \"How does Phong gather information for his group presentation so fast?\"",
      prompt: "Ba: \"He usually ______ the Internet to find useful articles and study tips.\"",
      display: { A: "looks up", B: "types", C: "checks", D: "surfs" },
      correct: "D",
      explanation: "\"<b>surf</b> the Internet\" (lướt mạng) là cụm động từ cố định, phù hợp với việc tìm kiếm bài viết và mẹo học tập."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Jane: \"I love using social media apps nowadays.\"",
      prompt: "Mark: \"Me too. They allow us to communicate ______ friends from different parts of the world easily.\"",
      display: { A: "for", B: "with", C: "to", D: "of" },
      correct: "B",
      explanation: "\"communicate <b>with</b> sb\" (giao tiếp với ai) là cụm giới từ cố định."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Doctor: \"You should start ______ aerobics 30 minutes a day to stay healthy.\"",
      prompt: "Patient: \"Thank you. I want to improve my full-body flexibility.\"",
      display: { A: "doing", B: "taking", C: "using", D: "making" },
      correct: "A",
      explanation: "\"<b>do</b> aerobics\" (tập thể dục nhịp điệu) là cụm động từ cố định."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Minh: \"What kinds of movies do your sisters like?\"",
      prompt: "Long: \"Well, they ______ Korean dramas ______ Indian ones because they love romance.\"",
      display: { A: "prefers - than", B: "prefer - to", C: "prefer - than", D: "prefers - to" },
      correct: "B",
      explanation: "\"<b>prefer</b> A <b>to</b> B\" (thích A hơn B) là cấu trúc cố định; chủ ngữ \"they\" (số nhiều) cần động từ không chia \"prefer\" (không phải \"prefers\")."
    },
    { id: 11, section: "I", type: "mcq",
      context: "An: \"Where should we go this weekend?\"",
      prompt: "Bình: \"In my free time, I would rather ______ the cinema than ______ the museum.\"",
      display: { A: "going to - visiting", B: "go to – visit", C: "to go to - to visit", D: "went to - visited" },
      correct: "B",
      explanation: "\"would rather <b>V1</b> than <b>V2</b>\" (thích làm gì hơn) — cả hai động từ đều ở dạng nguyên mẫu không \"to\": <b>go to – visit</b>."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Ann: \"What do you usually do on Sundays?\"",
      prompt: "Mary: \"______ I often wake up late and listen to some music.\"",
      display: { A: "I'm not doing anything.", B: "I usually sleep until noon.", C: "I used to drive to work.", D: "I'd be sleeping all day." },
      correct: "B",
      explanation: "\"<b>I usually sleep until noon.</b>\" phù hợp nhất với câu tiếp theo mô tả thói quen ngày Chủ nhật (dậy muộn, nghe nhạc)."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Lan: \"I think having a hobby helps us stay creative and happy.\"",
      prompt: "Hoa: \"______ It also reduces stress after a long school day.\"",
      display: { A: "You're welcome.", B: "Not at all.", C: "That's exactly what I think!", D: "I don't think so." },
      correct: "C",
      explanation: "\"<b>That's exactly what I think!</b>\" thể hiện sự đồng tình mạnh mẽ, phù hợp với việc Hoa nói thêm một lý do ủng hộ ý kiến của Lan ngay sau đó."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Phúc: \"Do you know how people in Germany spend their leisure time?\"",
      prompt: "Khang: \"______\"",
      display: { A: "Americans love their free time.", B: "In Russia, people like to go to football matches.", C: "The British prefer gardening.", D: "Yes, they love hanging out at the beach." },
      correct: "D",
      explanation: "Câu hỏi hỏi cụ thể về NGƯỜI ĐỨC → chỉ có đáp án D trả lời đúng về Đức (\"they love hanging out at the beach\"), các đáp án khác nói về Mỹ, Nga, Anh."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signNoCash",
      prompt: "What does the sign say?",
      display: {
        A: "You must have the exact amount of cash to buy things.",
        B: "Only cash payments are allowed at this store.",
        C: "This place accepts card or digital payments, not cash.",
        D: "You can pay with cash or a credit card here."
      },
      correct: "C",
      explanation: "Biển ghi \"NO CASH ACCEPTED — CARD OR DIGITAL PAYMENTS ONLY\" (Không nhận tiền mặt — Chỉ nhận thanh toán bằng thẻ hoặc kỹ thuật số) → nơi này chỉ chấp nhận thẻ/thanh toán số, không nhận tiền mặt, đáp án C."
    },
    { id: 16, section: "II", type: "mcq", image: "signSilentMode",
      prompt: "What does this notice tell you to do?",
      display: {
        A: "You cannot bring your phone inside this building.",
        B: "You can listen to loud music through your phone speaker.",
        C: "You should keep your mobile phone on silent mode.",
        D: "You are allowed to talk loudly on your phone."
      },
      correct: "C",
      explanation: "Biển ghi \"SILENT MODE REQUIRED — PLEASE TURN OFF OR MUTE YOUR MOBILE PHONES\" → cần để điện thoại ở chế độ im lặng, đáp án C."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "relaxCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "much", B: "an", C: "every", D: "some" },
      correct: "D",
      explanation: "\"any one of <b>some</b> handicrafts\" (bất kỳ một trong số các loại hình thủ công nào đó) — \"some\" đóng vai trò lượng từ chỉ \"một số loại\"."
    },
    { id: 18, section: "III", type: "mcq", passage: "relaxCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "staying", B: "sitting", C: "walking", D: "hanging" },
      correct: "D",
      explanation: "\"<b>hang</b> out at the beach\" (đi chơi/tụ tập ở bãi biển) là cụm động từ cố định."
    },
    { id: 19, section: "III", type: "mcq", passage: "relaxCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "to", B: "in", C: "on", D: "at" },
      correct: "C",
      explanation: "\"found <b>on</b> the outskirts of\" (nằm ở ngoại ô) là cụm giới từ cố định."
    },
    { id: 20, section: "III", type: "mcq", passage: "relaxCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "knowing", B: "which", C: "who", D: "known" },
      correct: "C",
      explanation: "\"They <b>who</b> want to visit...\" — \"who\" giới thiệu mệnh đề nhấn mạnh nhóm người (\"they\" = người Nga) mong muốn ghé thăm những khu vực đẹp gần hồ hoặc rừng."
    },
    { id: 21, section: "III", type: "mcq", passage: "relaxCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "borders", B: "spaces", C: "areas", D: "outskirts" },
      correct: "C",
      explanation: "\"beautiful <b>areas</b> near lakes or forests\" (những khu vực đẹp gần hồ hoặc rừng) phù hợp nhất về nghĩa."
    },
    { id: 22, section: "III", type: "mcq", passage: "relaxCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "either", B: "as well", C: "too", D: "also" },
      correct: "D",
      explanation: "\"Russian people <b>also</b> love to go to...\" — \"also\" đứng trước động từ chính để bổ sung thêm thông tin, phù hợp vị trí trong câu."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "bathReading",
      prompt: "Most people in the United States usually prefer to take a shower in the evening.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"most people take a shower once a day <b>in the morning</b>\", không phải buổi tối."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "bathReading",
      prompt: "In American bathrooms, you can easily move the showerhead around with your hand.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"The showerhead is usually mounted on the wall and <b>cannot be moved</b>.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "bathReading",
      prompt: "American children frequently play with toys like rubber ducks while taking a bath.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Children often take a bath each night and enjoy playing with small toys such as boats and <b>rubber ducks</b>.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "bathReading",
      prompt: "Bathrooms in the United States do not have a drain on the floor to let water out.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Unlike bathrooms in many countries, <b>there is no drain in the floor</b>.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "bathReading",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "A guide to how people bathe in America and important rules for travelers.",
        B: "The history of bathroom designs and sanitation in the United States.",
        C: "The psychological benefits of taking a soothing bath for adults after work.",
        D: "A comparison between American toys and bathing habits in other countries."
      },
      correct: "A",
      explanation: "Bài đọc giới thiệu cách người Mỹ tắm rửa (vòi sen cố định, không có thoát nước sàn...) và lưu ý quan trọng cho du khách (giữ nước trong bồn/vòi sen) → đáp án A bao quát toàn bài."
    },
    { id: 28, section: "IV", type: "mcq", passage: "bathReading",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "Travelers always carefully research how other cultures bathe before their trips.",
        B: "Water on an American bathroom floor can damage the floor.",
        C: "Many American women like taking a bath to reduce stress.",
        D: "You should use a towel or a mop if water spills onto the bathroom floor."
      },
      correct: "A",
      explanation: "Bài đọc nói \"One thing travelers <b>don't often think about</b> before traveling is how other cultures bathe\" — tức là du khách THƯỜNG KHÔNG nghĩ đến việc này trước, không phải luôn luôn tìm hiểu kỹ → câu A là SAI so với bài đọc."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "Many people believe that learning about different ______________ traditions is very exciting.",
      wordGiven: "culture", accepted: ["cultural"], correct: "cultural",
      explanation: "Cần tính từ đứng trước danh từ \"traditions\". <b>culture</b> (n) → <b>cultural</b> (adj, +al): thuộc về văn hóa."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "The teacher was extremely pleased because the students gave an ______________ presentation.",
      wordGiven: "impress", accepted: ["impressive"], correct: "impressive",
      explanation: "Cần tính từ đứng trước danh từ \"presentation\". <b>impress</b> (v) → <b>impressive</b> (adj, +ive): ấn tượng."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "______________, some people find making crafts boring while others love it.",
      wordGiven: "surprise", accepted: ["Surprisingly", "surprisingly"], correct: "Surprisingly",
      explanation: "Cần trạng từ đứng đầu câu bổ nghĩa cho cả câu. <b>surprise</b> (v/n) → <b>surprisingly</b> (adv, +ly): đáng ngạc nhiên là."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "Doing full-body exercises daily will help you strengthen and ______________ your bones.",
      wordGiven: "strong", accepted: ["strengthen"], correct: "strengthen",
      explanation: "Cần một động từ nguyên mẫu song song với \"strengthen\" đứng trước (cấu trúc \"help you V1 and V2\"). <b>strong</b> (adj) → <b>strengthen</b> (v, +en): làm cho chắc khỏe hơn. (Lưu ý: \"stronger\" là tính từ nên không thể đứng ở vị trí động từ này.)"
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "Regular physical activities are highly ______________ to your physical and mental health.",
      wordGiven: "benefit", accepted: ["beneficial"], correct: "beneficial",
      explanation: "Cần tính từ đứng sau \"highly\". <b>benefit</b> (n/v) → <b>beneficial</b> (adj, +ial): có lợi."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "The young girl felt complete ______________ after finishing her very first DIY project.",
      wordGiven: "satisfy", accepted: ["satisfaction"], correct: "satisfaction",
      explanation: "Cần danh từ đứng sau tính từ \"complete\". <b>satisfy</b> (v) → <b>satisfaction</b> (n, +ion): sự hài lòng, thỏa mãn."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "pastimeEntry",
      prompt: "What started as a simple hobby of making handmade jewelry quickly turned into a ____________________ for the young artist.",
      accepted: ["profitable pastime"], correct: "profitable pastime",
      explanation: "Từ điển cho ví dụ \"Cooking has become a <b>profitable pastime</b> for her since she started selling her bakes.\" — rất khớp với việc một sở thích trở thành nguồn thu nhập."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "pastimeEntry",
      prompt: "Going camping on weekends is a ____________________ among young adults who love nature.",
      accepted: ["popular pastime"], correct: "popular pastime",
      explanation: "Từ điển cho ví dụ \"Gardening is a <b>popular pastime</b> among older people.\" — khớp với cấu trúc \"a popular pastime among + nhóm người\"."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "Julie finds making crafts boring.",
      starter: "Julie is not",
      accepted: [
        "julie is not interested in making crafts",
        "julie is not keen on making crafts",
        "julie is not fond of making crafts"
      ],
      correct: "Julie is not interested in making crafts. / Julie is not keen on making crafts. / Julie is not fond of making crafts.",
      explanation: "\"find sth + adj\" (thấy điều gì đó như thế nào) khi \"boring\" có thể diễn đạt lại bằng \"<b>not be interested in / keen on / fond of + N/V-ing</b>\" (không thích/không hứng thú với).<br>→ <i>Julie is not interested in making crafts.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "My sister prefers watching Korean dramas to watching Indian dramas.",
      starter: "My sister likes",
      accepted: [
        "my sister likes watching korean dramas more than watching indian dramas",
        "my sister likes watching korean dramas more than indian dramas"
      ],
      correct: "My sister likes watching Korean dramas more than watching Indian dramas.",
      explanation: "\"prefer A to B\" (thích A hơn B) có thể chuyển thành \"<b>like A more than B</b>\" — cùng diễn tả sự so sánh sở thích.<br>→ <i>My sister likes watching Korean dramas more than watching Indian dramas.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "I would rather surf the Internet than play computer games in my free time.",
      starter: "I prefer",
      accepted: ["i prefer surfing the internet to playing computer games in my free time"],
      correct: "I prefer surfing the Internet to playing computer games in my free time.",
      explanation: "\"would rather V1 than V2\" (thích làm gì hơn) có thể chuyển thành \"<b>prefer V-ing to V-ing</b>\" — cùng diễn tả sự ưu tiên.<br>→ <i>I prefer surfing the Internet to playing computer games in my free time.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "What do you often do in your free time?",
      starter: "What is your",
      accepted: [
        "what is your favourite pastime",
        "what is your favorite pastime",
        "what is your favourite free-time activity",
        "what is your favorite free-time activity"
      ],
      correct: "What is your favourite pastime? / What is your favourite free-time activity?",
      explanation: "Câu hỏi \"What do you often do in your free time?\" có thể diễn đạt lại ngắn gọn bằng danh từ \"<b>favourite pastime</b>\" hoặc \"<b>favourite free-time activity</b>\" (sở thích/hoạt động yêu thích lúc rảnh).<br>→ <i>What is your favourite pastime?</i>"
    }
  ]
};
