const TEST = {
  id: "test24",
  grade: "Grade 9 — Global Success",
  unit: "Unit 6: Vietnamese lifestyle: then and now",
  title: "Grade 9 · Unit 6: Vietnamese lifestyle: then and now · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test24.html",
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
    { id: "VI", title: "Look at the dictionary entry of “extended”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    playtimeCloze: "Children's playtime and activities in Vietnam changed (17) ________ from previous generations. Decades ago, children spent most of (18) ________ free time playing traditional games like tug-of-war, hide-and-seek, and kite flying in open fields or village squares. These outdoor activities, (19) ________ not only provided physical exercise but also fostered a sense of community among children, were an integral part of growing up in Vietnam. (20) ________, the rise of (21) ________ devices has revolutionized the way children spend their leisure time. Today, many young people are more likely to be found indoors, engaging with video games, social media, or online learning platforms. Although these devices offer educational benefits and access to (22) ________ wealth of information, they have also contributed to a more sedentary lifestyle. Moreover, the shift from outdoor to indoor play has resulted in fewer opportunities for children to develop social skills and build relationships with their peers in a traditional setting.",
    familyReading: "There have been changes in family structure and values in Viet Nam because of industrialization and modernization. The Vietnamese family now exists in two major forms: nuclear families (two generations) and extended families (from three generations upwards). The nuclear family is the most common. The nuclear family now does not stand on its own, but it always receives support and assistance from wider families (parents, brothers and wider kin). Major basic family relationships have changed positively. Modern values have been selected carefully while traditional values are preserved and developed. Children obey and respect their parents while maintaining their independent ideas and views. Parents respect their children's independence out of their love and indulgence. The relationship between grandparents and parents is also noticeable. Parents and grandparents tend to live together with their children and grandchildren. This traditional cultural feature distinguishes itself from that of modern western societies. Statistics show that the elderly play an important role in the family. At present, parents or grandparents living together with children or grandchildren has several advantages. Social-educational role plays an important role in the Vietnamese family because it contributes to forming individual's personality. This issue receives particular attention from all family members. Many families invest time and money in caring for and educating their children while some parents regrettably cannot afford time to care for and educate their children.",
    extendedEntry: {
      word: "extended", ipa: "/ɪkˈstendɪd/", pos: "adjective",
      def: "1. Long or longer than usual. 2. Including a wide range of people or things.",
      examples: [
        "The show was back by popular demand for an <b>extended run</b>.",
        "After the meeting, they had an <b>extended discussion</b> about the new project.",
        "She is going on an <b>extended holiday</b> to Southeast Asia this summer.",
        "I have a very large <b>extended family</b>, including many cousins and aunts.",
        "The school provides an <b>extended range</b> of extracurricular activities."
      ]
    }
  },
  images: {
    signEnvironmentClean: "assets/images/sign_keep_environment_clean.jpg",
    signFreeWifi: "assets/images/sign_free_wifi.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "flu", B: "chalk", C: "salmon", D: "calf" },
      correct: "A",
      explanation: "Phần gạch chân là chữ cái \"l\". \"chalk\" /tʃɔːk/, \"salmon\" /ˈsæmən/, \"calf\" /kæf/ đều có \"l\" <b>câm</b>, không phát âm. Riêng \"flu\" /fluː/ có \"l\" phát âm là <b>/l/</b> → khác biệt, đáp án A."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "statue", B: "staple", C: "lantern", D: "interact" },
      correct: "B",
      explanation: "Phần gạch chân là chữ cái \"a\". \"statue\" /ˈstætʃuː/, \"lantern\" /ˈlæntərn/, \"interact\" /ˌɪntərˈækt/ đều có \"a\" phát âm là <b>/æ/</b>. Riêng \"staple\" /ˈsteɪpl/ có \"a\" (kết hợp với \"e\" câm cuối từ) phát âm là <b>/eɪ/</b> → khác biệt, đáp án B."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "surprise", B: "finish", C: "provide", D: "explain" },
      correct: "B",
      explanation: "\"surprise\" /sərˈpraɪz/, \"provide\" /prəˈvaɪd/, \"explain\" /ɪkˈspleɪn/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"finish\" /ˈfɪnɪʃ/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án B."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "popularity", B: "exhilarating", C: "opportunity", D: "anniversary" },
      correct: "B",
      explanation: "\"popularity\" /ˌpɒpjuˈlærəti/, \"opportunity\" /ˌɒpərˈtjuːnəti/, \"anniversary\" /ˌænɪˈvɜːrsəri/ đều có trọng âm rơi vào <b>âm tiết 3</b>. Riêng \"exhilarating\" /ɪɡˈzɪləreɪtɪŋ/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án B."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Minh: \"I think our family has a very healthy lifestyle.\"",
      prompt: "Nam: \"I agree. We maintain it with regular exercise and a ________.\"",
      display: { A: "material life", B: "traditional dish", C: "balanced diet", D: "staple food" },
      correct: "C",
      explanation: "\"regular exercise and a <b>balanced diet</b>\" (tập thể dục đều đặn và chế độ ăn cân bằng) là cặp cụm từ quen thuộc khi nói về lối sống lành mạnh."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Lan: \"Does your sister like the same music as you?\"",
      prompt: "Hoa: \"No, her taste in music is quite ________ mine.\"",
      display: { A: "independent with", B: "similar with", C: "different from", D: "various from" },
      correct: "C",
      explanation: "Cụm cố định \"<b>different from</b>\" (khác với) là cách kết hợp đúng, không dùng \"different with\"."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Teacher: \"Remember, the success of our school play depends ________ your cooperation.\"",
      prompt: "Students: \"Yes, teacher. We will work hard together.\"",
      display: { A: "with", B: "for", C: "on", D: "in" },
      correct: "C",
      explanation: "Cụm cố định \"depend <b>on</b>\" (phụ thuộc vào)."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Peter: \"Why did he change his daily habits?\"",
      prompt: "Jane: \"Well, he decided ________ his lifestyle to improve his health.\"",
      display: { A: "change", B: "changing", C: "to changing", D: "to change" },
      correct: "D",
      explanation: "Cấu trúc \"decide + to V\" (quyết định làm gì): \"he decided <b>to change</b> his lifestyle.\""
    },
    { id: 9, section: "I", type: "mcq",
      context: "Tom: \"What should we do at the history museum tomorrow?\"",
      prompt: "Ba: \"I suggested ________ the traditional farming tools there.\"",
      display: { A: "seeing", B: "see", C: "to see", D: "to seeing" },
      correct: "A",
      explanation: "Cấu trúc \"suggest + V-ing\" (đề nghị làm gì): \"I suggested <b>seeing</b> the traditional farming tools.\""
    },
    { id: 10, section: "I", type: "mcq",
      context: "Grandson: \"Grandpa, do you think parents should always decide everything?\"",
      prompt: "Grandfather: \"No, I believe in a ________ relationship where children can share ideas.\"",
      display: { A: "extended", B: "democratic", C: "personal", D: "various" },
      correct: "B",
      explanation: "\"a <b>democratic</b> relationship\" (mối quan hệ dân chủ) phù hợp với việc con cái được chia sẻ ý kiến."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Tourist: \"Is this fair suitable for my young children?\"",
      prompt: "Guide: \"Yes, most events here are ________, designed for the whole family to enjoy.\"",
      display: { A: "family-oriented", B: "independent", C: "electronic", D: "exhilarating" },
      correct: "A",
      explanation: "\"most events here are <b>family-oriented</b>\" (hướng đến gia đình) phù hợp với \"designed for the whole family to enjoy\"."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Son: \"I'm sorry, Mum, I haven't cooked dinner yet.\"",
      prompt: "Mother: \"________. You can do it now. I'll help you.\"",
      display: { A: "Welcome", B: "Ok good", C: "That's alright", D: "I haven't either" },
      correct: "C",
      explanation: "\"<b>That's alright</b>\" là cách đáp lại lời xin lỗi một cách nhẹ nhàng, phù hợp với câu tiếp theo đề nghị giúp đỡ."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Alice: \"How do you feel about the lifestyle in the past?\"",
      prompt: "Mary: \"________\"",
      display: { A: "It's hard to say.", B: "Not at all.", C: "It was simpler.", D: "I've no idea." },
      correct: "C",
      explanation: "\"<b>It was simpler.</b>\" là câu trả lời trực tiếp và tự nhiên nhất cho câu hỏi về cảm nhận đối với lối sống trong quá khứ."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Nam: \"________\"",
      prompt: "Long: \"Honestly, I prefer modern life because of the convenience of technology.\"",
      display: { A: "Do you like playing traditional games like tug-of-war?", B: "What do you think about the lifestyle then and now?", C: "How has technology changed our lives recently?", D: "Is it true that people in the past were healthier?" },
      correct: "B",
      explanation: "\"<b>What do you think about the lifestyle then and now?</b>\" là câu hỏi phù hợp nhất để dẫn đến câu trả lời so sánh lối sống xưa và nay của Long."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signEnvironmentClean",
      prompt: "What does this sign tell you?",
      display: {
        A: "Do not leave your feet touching the grass.",
        B: "You can throw trash anywhere.",
        C: "You should put litter in the bin to keep the environment clean.",
        D: "Only traditional food is allowed here."
      },
      correct: "C",
      explanation: "Biển ghi \"KEEP OUR ENVIRONMENT CLEAN\" với hình một bạn nhỏ bỏ rác vào thùng → nên bỏ rác vào thùng để giữ môi trường sạch sẽ, đáp án C."
    },
    { id: 16, section: "II", type: "mcq", image: "signFreeWifi",
      prompt: "What does this sign mean?",
      display: {
        A: "Wi-fi is available for free.",
        B: "You must pay to use the internet.",
        C: "Electronic devices are prohibited.",
        D: "There is no Wi-fi here."
      },
      correct: "A",
      explanation: "Biển ghi \"FREE WI-FI AVAILABLE HERE\" → có wifi miễn phí ở khu vực này, đáp án A."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "playtimeCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "slightly", B: "dramatically", C: "rarely", D: "minimally" },
      correct: "B",
      explanation: "\"changed <b>dramatically</b> from previous generations\" — \"dramatically\" (một cách đáng kể) phù hợp với sự thay đổi lớn được mô tả trong cả đoạn văn."
    },
    { id: 18, section: "III", type: "mcq", passage: "playtimeCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "their", B: "them", C: "her", D: "our" },
      correct: "A",
      explanation: "\"most of <b>their</b> free time\" — tính từ sở hữu \"their\" phù hợp với chủ ngữ số nhiều \"children\"."
    },
    { id: 19, section: "III", type: "mcq", passage: "playtimeCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "who", B: "that", C: "which", D: "when" },
      correct: "C",
      explanation: "Đại từ quan hệ \"<b>which</b>\" thay thế cho \"these outdoor activities\" (vật), đứng trong mệnh đề quan hệ không xác định (có dấu phẩy)."
    },
    { id: 20, section: "III", type: "mcq", passage: "playtimeCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "Therefore", B: "However", C: "Additionally", D: "Consequently" },
      correct: "B",
      explanation: "\"<b>However</b>, the rise of electronic devices has revolutionized...\" — thể hiện sự tương phản với hoạt động ngoài trời truyền thống được nói ở câu trước."
    },
    { id: 21, section: "III", type: "mcq", passage: "playtimeCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "electronic", B: "traditional", C: "outdoor", D: "physical" },
      correct: "A",
      explanation: "\"the rise of <b>electronic</b> devices\" phù hợp với các ví dụ tiếp theo: video games, social media, online learning platforms."
    },
    { id: 22, section: "III", type: "mcq", passage: "playtimeCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "a", B: "an", C: "the", D: "Ø (no article)" },
      correct: "A",
      explanation: "\"access to <b>a</b> wealth of information\" — cụm cố định \"a wealth of + N\" (một nguồn/khối lượng lớn) luôn dùng mạo từ \"a\"."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "familyReading",
      prompt: "Extended families are currently the most common type of family structure in Viet Nam.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"The <b>nuclear family</b> is the most common\", không phải gia đình mở rộng."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "familyReading",
      prompt: "Nuclear families in Viet Nam usually operate completely independently without any help from other relatives.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"it always <b>receives support and assistance</b> from wider families\", không hoàn toàn độc lập."
    },
    { id: 25, section: "IV", type: "truefalse", passage: "familyReading",
      prompt: "Vietnamese children today respect their parents but still have their own opinions.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Children obey and respect their parents while <b>maintaining their independent ideas and views</b>.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "familyReading",
      prompt: "Grandparents and parents in Viet Nam often live under the same roof with their children and grandchildren.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Parents and grandparents tend to <b>live together</b> with their children and grandchildren.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "familyReading",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "The negative impacts of modernization on Vietnamese family values.",
        B: "The changes and continuity in Vietnamese family structures and relationships.",
        C: "The financial difficulties Vietnamese parents face when educating their children.",
        D: "The comparison between Vietnamese families and Western families in education."
      },
      correct: "B",
      explanation: "Bài đọc trình bày cả sự thay đổi trong cấu trúc gia đình lẫn những giá trị vẫn được duy trì → đáp án B bao quát nhất."
    },
    { id: 28, section: "IV", type: "mcq", passage: "familyReading",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "Modern values are accepted without keeping traditional ones.",
        B: "The elderly have an important role in the Vietnamese family.",
        C: "Family members pay special attention to the social-educational role.",
        D: "Some parents do not have enough time to look after and educate their children."
      },
      correct: "A",
      explanation: "Bài đọc nói ngược lại: \"Modern values have been selected carefully <b>while traditional values are preserved and developed</b>\" — cả hai cùng tồn tại, không phải chỉ chấp nhận giá trị hiện đại → câu A SAI."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "Many people believe that traditional games are very ______________.",
      wordGiven: "exhilarate", accepted: ["exhilarating"], correct: "exhilarating",
      explanation: "Cần tính từ làm bổ ngữ sau \"are very\". <b>exhilarate</b> (v) → <b>exhilarating</b> (adj, +ing, thú vị, phấn khích)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "The ______________ of social media has changed how we communicate.",
      wordGiven: "popular", accepted: ["popularity"], correct: "popularity",
      explanation: "Cần danh từ làm chủ ngữ của câu. <b>popular</b> (adj) → <b>popularity</b> (n, sự phổ biến)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "They are looking for ______________ materials to build a traditional house.",
      wordGiven: "nature", accepted: ["natural"], correct: "natural",
      explanation: "Cần tính từ đứng trước danh từ \"materials\". <b>nature</b> (n) → <b>natural</b> (adj, tự nhiên)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "______________, many traditions are still kept alive by the young generation.",
      wordGiven: "surprise", accepted: ["surprisingly"], correct: "Surprisingly",
      explanation: "Cần trạng từ đứng đầu câu bổ nghĩa cho cả câu. <b>surprise</b> (n/v) → <b>surprisingly</b> (adv, đáng ngạc nhiên là)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "He gave an ______________ presentation about life in the past.",
      wordGiven: "impress", accepted: ["impressive"], correct: "impressive",
      explanation: "Cần tính từ đứng trước danh từ \"presentation\". <b>impress</b> (v) → <b>impressive</b> (adj, ấn tượng)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "We need the ______________ of everyone to preserve our heritage.",
      wordGiven: "cooperate", accepted: ["cooperation"], correct: "cooperation",
      explanation: "Cần danh từ làm tân ngữ của \"need\". <b>cooperate</b> (v) → <b>cooperation</b> (n, sự hợp tác)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "extendedEntry",
      prompt: "To meet the students' needs, the university now offers an ___________________ of online courses.",
      accepted: ["extended range"], correct: "extended range",
      explanation: "Từ điển cho ví dụ \"The school provides an <b>extended range</b> of extracurricular activities.\" — khớp với ngữ cảnh cung cấp nhiều khóa học trực tuyến hơn."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "extendedEntry",
      prompt: "Many Vietnamese people live with their ___________________, which includes grandparents, parents, and children.",
      accepted: ["extended family"], correct: "extended family",
      explanation: "Từ điển cho ví dụ \"I have a very large <b>extended family</b>, including many cousins and aunts.\" — khớp với ngữ cảnh sống cùng ông bà, cha mẹ và con cái."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "You should research how life has changed in the past 20 years.",
      starter: "I advise",
      accepted: ["i advise you to research how life has changed in the past 20 years"],
      correct: "I advise you to research how life has changed in the past 20 years.",
      explanation: "\"You should + V\" (lời khuyên) có thể viết lại bằng cấu trúc \"<b>advise sb + to V</b>\" (khuyên ai làm gì).<br>→ <i>I advise you to research how life has changed in the past 20 years.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "A burglar broke into the building while the guard was sleeping.",
      starter: "When the burglar",
      accepted: ["when the burglar broke into the building, the guard was sleeping"],
      correct: "When the burglar broke into the building, the guard was sleeping.",
      explanation: "\"S1 + V(quá khứ đơn) + while + S2 + was/were + V-ing\" có thể viết lại bằng \"<b>When + S1 + V(quá khứ đơn), S2 + was/were + V-ing</b>\" — giữ nguyên ý nghĩa: một hành động ngắn xen vào hành động đang diễn ra.<br>→ <i>When the burglar broke into the building, the guard was sleeping.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "For many teenagers, comfort in clothing matters more than style.",
      starter: "Many teenagers prefer",
      accepted: ["many teenagers prefer comfortable clothing to stylish one", "many teenagers prefer comfortable clothing to stylish clothing"],
      correct: "Many teenagers prefer comfortable clothing to stylish one.",
      explanation: "\"N1 matters more than N2\" có thể viết lại bằng cấu trúc so sánh sở thích \"<b>prefer + N1 + to + N2</b>\" (thích cái gì hơn cái gì).<br>→ <i>Many teenagers prefer comfortable clothing to stylish one.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "He suggested seeing the traditional farming tools at the museum.",
      starter: "Why don't",
      accepted: ["why don't we see the traditional farming tools at the museum"],
      correct: "Why don't we see the traditional farming tools at the museum?",
      explanation: "\"suggest + V-ing\" (đề nghị làm gì) có thể viết lại bằng cấu trúc đề nghị \"<b>Why don't we + V (nguyên mẫu)?</b>\".<br>→ <i>Why don't we see the traditional farming tools at the museum?</i>"
    }
  ]
};
