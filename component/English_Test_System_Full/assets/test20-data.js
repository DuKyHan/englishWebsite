const TEST = {
  id: "test20",
  grade: "Grade 9 — Global Success",
  unit: "Unit 4: Remembering the past",
  title: "Grade 9 · Unit 4: Remembering the past · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test20.html",
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
    { id: "VI", title: "Look at the dictionary entry of “tradition”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    franceCloze: "Vietnam in 1975 was a country undergoing significant change. The war had just ended, and the government was working to rebuild the nation. While many people were dealing (17) ________ the aftermath, they wished they had a (18) ________ plan for the future. As the new government was working hard, they faced numerous challenges, (19) ________ some of which were unexpected. The economy was in a poor state, (20) ________ rebuilding efforts were slow. Despite these difficulties, hope for a brighter future (21) ________ strong among the people. The government (22) ________ to return the country to a more stable condition. Despite the challenges, the process of recovery continued, and efforts were being made to improve the situation.",
    franceReading: "A long time ago, France was a country with a lot of history. In the 19th century, France was known for its beautiful cities and many important events. While people in France were living their daily lives, the country was also going through many changes. In the early 1800s, while wars were happening across Europe, France was involved in these conflicts. People in France were living under Napoleon Bonaparte, who wanted to make the French Empire larger. The French people were facing many problems, including food shortages and the worries of war. In the 1870s, while France was rebuilding after the wars, the country was also working on growing its industries. Factories were being built, and many people moved from the countryside to cities to find work. The French government was trying to make the economy better and improve life for everyone. People hoped these changes would bring a better future. By the early 20th century, France was famous for its art and science. While many French artists and scientists were working hard, they wished they had more help from the government. They hoped their work would be recognized and appreciated in France and around the world. France's history is full of important changes. As people in France were adjusting to new developments, they looked back with pride at their achievements and hoped for more progress in the future.",
    traditionEntry: {
      word: "tradition", ipa: "/trəˈdɪʃn/", pos: "noun",
      def: "a belief, custom, or way of doing something that has existed for a long time among a particular group of people",
      examples: [
        "The company has a <b>long tradition</b> of excellence in customer service.",
        "It is a <b>family tradition</b> to have a big dinner together on New Year's Eve.",
        "The village people are proud to <b>keep up the tradition</b> of handmade pottery.",
        "In many cultures, it is a <b>common tradition</b> to exchange gifts during festivals.",
        "They decided to <b>break with tradition</b> and go abroad for Christmas instead of staying home."
      ]
    }
  },
  images: {
    signNoDogsAllowed: "assets/images/sign_no_dogs_allowed.jpg",
    signBookshopHours: "assets/images/sign_bookshop_hours.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "language", B: "castle", C: "library", D: "glass" },
      correct: "B",
      explanation: "Phần gạch chân là chữ cái \"l\". \"language\" /ˈlæŋɡwɪdʒ/, \"library\" /ˈlaɪbrəri/, \"glass\" /ɡlæs/ đều có \"l\" là <b>âm rõ (clear L)</b> đứng đầu từ/cụm phụ âm. Riêng \"castle\" /ˈkæsl/ có \"l\" là <b>âm cuối, âm tiết hóa (dark/syllabic L)</b> vì \"t\" trong từ này câm → khác biệt về cách phát âm, đáp án B."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "ancient", B: "typical", C: "appear", D: "tradition" },
      correct: "A",
      explanation: "Phần gạch chân là chữ cái \"a\". \"typical\" /ˈtɪpɪkl/, \"appear\" /əˈpɪər/, \"tradition\" /trəˈdɪʃn/ đều có \"a\" phát âm là <b>/ə/</b> (không trọng âm). Riêng \"ancient\" /ˈeɪnʃənt/ có \"a\" phát âm là <b>/eɪ/</b> (có trọng âm) → khác biệt, đáp án A."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "barefoot", B: "modern", C: "complete", D: "ancient" },
      correct: "C",
      explanation: "\"barefoot\" /ˈberfʊt/, \"modern\" /ˈmɒdərn/, \"ancient\" /ˈeɪnʃənt/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"complete\" /kəmˈpliːt/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án C."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "activity", B: "magnificent", C: "generation", D: "development" },
      correct: "C",
      explanation: "\"activity\" /ækˈtɪvəti/, \"magnificent\" /mæɡˈnɪfɪsnt/, \"development\" /dɪˈveləpmənt/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"generation\" /ˌdʒenəˈreɪʃn/ có trọng âm rơi vào <b>âm tiết 3</b> → khác biệt, đáp án C."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Lan: \"I don't understand this point of grammar.\"",
      prompt: "Mai: \"I wish I ________ it better so I could explain it to you.\"",
      display: { A: "understood", B: "understands", C: "had understood", D: "will understand" },
      correct: "A",
      explanation: "\"wish + S + V(quá khứ đơn)\" diễn tả điều ước không có thật ở <b>hiện tại</b>: \"I wish I <b>understood</b> it better\" (ước hiểu rõ hơn ngay bây giờ)."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Minh: \"It never stops raining here.\"",
      prompt: "Nam: \"I wish it ________ raining soon so we can go out.\"",
      display: { A: "will stop", B: "had stopped", C: "would stop", D: "stopped" },
      correct: "C",
      explanation: "\"wish + S + would + V\" diễn tả mong muốn một điều gì đó thay đổi trong <b>tương lai</b> (thường thể hiện sự khó chịu/mong đợi): \"I wish it <b>would stop</b> raining soon.\""
    },
    { id: 7, section: "I", type: "mcq",
      context: "Tourist: \"What is that big statue in the central square?\"",
      prompt: "Guide: \"It's a ________ dedicated to the heroes of our country.\"",
      display: { A: "monument", B: "castle", C: "house", D: "building" },
      correct: "A",
      explanation: "\"a <b>monument</b> dedicated to the heroes\" (tượng đài dành để tưởng nhớ các anh hùng) phù hợp với hình ảnh bức tượng lớn ở quảng trường trung tâm."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Librarian: \"These historical documents are very old.\"",
      prompt: "Student: \"Yes, they are well ________ for future generations.\"",
      display: { A: "discovered", B: "preserved", C: "contributed", D: "occupied" },
      correct: "B",
      explanation: "\"well <b>preserved</b> for future generations\" (được bảo quản tốt cho thế hệ sau) phù hợp với các tài liệu lịch sử lâu đời."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Anna: \"Where were you at 10 PM last night?\"",
      prompt: "Ben: \"I ________ a documentary about space on TV.\"",
      display: { A: "watched", B: "was watching", C: "were watching", D: "watch" },
      correct: "B",
      explanation: "Hành động đang diễn ra tại một thời điểm xác định trong quá khứ (\"at 10 PM last night\") dùng <b>quá khứ tiếp diễn</b>: \"I <b>was watching</b> a documentary.\""
    },
    { id: 10, section: "I", type: "mcq",
      context: "Tom: \"Why didn't you answer my call?\"",
      prompt: "Jerry: \"Sorry, I ________ a book when you called me.\"",
      display: { A: "had read", B: "reads", C: "was reading", D: "read" },
      correct: "C",
      explanation: "Hành động đang diễn ra thì bị một hành động khác (call) xen vào dùng <b>quá khứ tiếp diễn</b>: \"I <b>was reading</b> a book when you called me.\""
    },
    { id: 11, section: "I", type: "mcq",
      context: "Volunteer: \"We finished the work so fast!\"",
      prompt: "Leader: \"Thanks ________ your hard work, the park was cleaned up quickly.\"",
      display: { A: "for", B: "from", C: "to", D: "in" },
      correct: "C",
      explanation: "\"Thanks <b>to</b> your hard work\" — cụm cố định \"thanks to + N\" (nhờ vào, nhờ có)."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Hoa: \"Shall I help you with that heavy suitcase?\"",
      prompt: "Mai: \"________\"",
      display: { A: "That's very kind of you", B: "I can't agree more", C: "What a pity", D: "Not a chance" },
      correct: "A",
      explanation: "\"<b>That's very kind of you</b>\" là cách đáp lại lời đề nghị giúp đỡ một cách lịch sự, thể hiện sự cảm kích."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Son: \"I want to be ________ tour guide in the future.\"",
      prompt: "Dad: \"That's a great idea! You love traveling.\"",
      display: { A: "another", B: "an", C: "a", D: "the" },
      correct: "C",
      explanation: "Mạo từ \"<b>a</b>\" đứng trước danh từ đếm được số ít bắt đầu bằng phụ âm \"tour guide\" /t/."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Customer: \"I'm interested in your training courses.\"",
      prompt: "Staff: \"Great! We provide courses with low ________ for everyone.\"",
      display: { A: "rate", B: "fees", C: "price", D: "expense" },
      correct: "B",
      explanation: "\"low <b>fees</b>\" (học phí thấp) là cách diễn đạt phù hợp nhất khi nói về chi phí của các khóa đào tạo."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signNoDogsAllowed",
      prompt: "What does this sign say?",
      display: {
        A: "Dogs cannot be in this area.",
        B: "Dogs are allowed in the pool.",
        C: "Dogs are sometimes allowed.",
        D: "This area is only for dogs."
      },
      correct: "A",
      explanation: "Biển ghi \"NO DOGS ALLOWED\" → cấm chó vào khu vực này, đáp án A."
    },
    { id: 16, section: "II", type: "mcq", image: "signBookshopHours",
      prompt: "What does the notice say?",
      display: {
        A: "The shop is open in the morning.",
        B: "The shop is open in the afternoon and evening.",
        C: "The shop is closed all day.",
        D: "The shop is closed in the afternoon."
      },
      correct: "B",
      explanation: "Biển ghi \"BOOKSHOP OPENING HOURS — 13:00 - 21:00 DAILY\" → cửa hàng mở cửa từ 13h đến 21h, tức buổi chiều và tối, đáp án B."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "franceCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "at", B: "with", C: "for", D: "on" },
      correct: "B",
      explanation: "\"dealing <b>with</b> the aftermath\" — cụm cố định \"deal with\" (đối phó/xử lý với)."
    },
    { id: 18, section: "III", type: "mcq", passage: "franceCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "better", B: "best", C: "good", D: "well" },
      correct: "A",
      explanation: "\"a <b>better</b> plan\" — so sánh hơn của \"good\", đứng trước danh từ \"plan\" để diễn tả mong muốn một kế hoạch tốt hơn hiện tại."
    },
    { id: 19, section: "III", type: "mcq", passage: "franceCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "including", B: "containing", C: "consisting", D: "combining" },
      correct: "A",
      explanation: "\"numerous challenges, <b>including</b> some ... unexpected\" — \"including\" (bao gồm) dùng để liệt kê ví dụ cụ thể trong một nhóm lớn hơn."
    },
    { id: 20, section: "III", type: "mcq", passage: "franceCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "but", B: "because", C: "and", D: "although" },
      correct: "C",
      explanation: "\"The economy was in a poor state, <b>and</b> rebuilding efforts were slow\" — \"and\" nối hai vế cùng chiều, cùng mô tả tình trạng khó khăn."
    },
    { id: 21, section: "III", type: "mcq", passage: "franceCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "stayed", B: "remained", C: "kept", D: "held" },
      correct: "B",
      explanation: "\"hope ... <b>remained</b> strong\" — \"remain + adj\" (vẫn duy trì ở trạng thái nào đó) là cách diễn đạt phù hợp và tự nhiên nhất."
    },
    { id: 22, section: "III", type: "mcq", passage: "franceCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "aimed", B: "suggested", C: "points", D: "managed" },
      correct: "A",
      explanation: "\"The government <b>aimed</b> to return the country to a more stable condition\" — \"aim to V\" (nhắm tới/đặt mục tiêu làm gì)."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "franceReading",
      prompt: "Napoleon Bonaparte wanted to expand the size of the French Empire.",
      correct: "True",
      explanation: "Đúng. Bài đọc: Napoleon Bonaparte \"<b>wanted to make the French Empire larger</b>.\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "franceReading",
      prompt: "During the early 1800s, French people had plenty of food and felt very safe.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"The French people were facing many problems, including <b>food shortages</b> and the worries of war.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "franceReading",
      prompt: "In the 1870s, many people moved to cities because new factories were being built.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Factories were being built, and many people <b>moved from the countryside to cities</b> to find work.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "franceReading",
      prompt: "Artists and scientists in the early 20th century received all the support they needed from the government.",
      correct: "False",
      explanation: "Sai. Bài đọc: họ \"<b>wished they had more help</b> from the government\" — nghĩa là chưa nhận đủ sự hỗ trợ."
    },
    { id: 27, section: "IV", type: "mcq", passage: "franceReading",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "The rise and fall of Napoleon Bonaparte's empire.",
        B: "The historical changes and developments in France from the 19th to the early 20th century.",
        C: "The movement of workers from the countryside to French cities.",
        D: "The international achievements of French artists and scientists."
      },
      correct: "B",
      explanation: "Bài đọc trình bày các giai đoạn thay đổi của nước Pháp từ thế kỷ 19 đến đầu thế kỷ 20 → đáp án B bao quát nhất."
    },
    { id: 28, section: "IV", type: "mcq", passage: "franceReading",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "France was known for its beautiful cities and important events in the 19th century.",
        B: "France stayed completely out of European conflicts in the early 1800s.",
        C: "The French government tried to improve the economy and people's lives in the 1870s.",
        D: "French people felt proud of what they had achieved while adapting to new changes."
      },
      correct: "B",
      explanation: "Bài đọc nói ngược lại: \"France <b>was involved in these conflicts</b>\" (Pháp có tham gia vào các cuộc xung đột) → câu B SAI."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "The palace is truly ______________; it's the most beautiful building I've seen.",
      wordGiven: "magnificent", accepted: ["magnificent"], correct: "magnificent",
      explanation: "Từ \"magnificent\" (adj, tráng lệ, lộng lẫy) đã đúng dạng cần thiết để làm bổ ngữ sau \"is truly\", không cần biến đổi."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "The ______________ of the new technology took many years.",
      wordGiven: "develop", accepted: ["development"], correct: "development",
      explanation: "Cần danh từ làm chủ ngữ của câu. <b>develop</b> (v) → <b>development</b> (n, +ment, sự phát triển)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "We should be grateful to the previous ______________ for our traditions.",
      wordGiven: "generate", accepted: ["generations"], correct: "generations",
      explanation: "Cần danh từ số nhiều làm tân ngữ của giới từ \"to\". <b>generate</b> (v) → <b>generation(s)</b> (n, +ion, thế hệ)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "The city looks very ______________ with all these new skyscrapers.",
      wordGiven: "modernity", accepted: ["modern"], correct: "modern",
      explanation: "Cần tính từ làm bổ ngữ sau \"looks\". <b>modernity</b> (n) → <b>modern</b> (adj, hiện đại)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "There were many ______________ activities held at the school last week.",
      wordGiven: "culture", accepted: ["cultural"], correct: "cultural",
      explanation: "Cần tính từ đứng trước danh từ \"activities\". <b>culture</b> (n) → <b>cultural</b> (adj, +al, thuộc về văn hóa)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "They are trying to ______________ the old castle.",
      wordGiven: "preservation", accepted: ["preserve"], correct: "preserve",
      explanation: "Cần động từ nguyên mẫu sau \"to\". <b>preservation</b> (n) → <b>preserve</b> (v, bảo tồn, gìn giữ)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "traditionEntry",
      prompt: "Younger generations should learn folk songs to ___________________ of their ancestors.",
      accepted: ["keep up the tradition"], correct: "keep up the tradition",
      explanation: "Từ điển cho ví dụ \"The village people are proud to <b>keep up the tradition</b> of handmade pottery.\" — khớp với ngữ cảnh gìn giữ truyền thống của tổ tiên."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "traditionEntry",
      prompt: "It is a ___________________ in this country to wear traditional clothes when visiting a pagoda.",
      accepted: ["common tradition"], correct: "common tradition",
      explanation: "Từ điển cho ví dụ \"In many cultures, it is a <b>common tradition</b> to exchange gifts during festivals.\" — khớp với ngữ cảnh phong tục phổ biến khi đi lễ chùa."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "My brother doesn't have a sports bike.",
      starter: "My brother wishes",
      accepted: ["my brother wishes he had a sports bike"],
      correct: "My brother wishes he had a sports bike.",
      explanation: "Sự thật ở hiện tại (\"doesn't have\") chuyển thành điều ước không có thật ở hiện tại: \"<b>wish(es) + S + V(quá khứ đơn)</b>\".<br>→ <i>My brother wishes he had a sports bike.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "It's a pity that we do not have a long summer holiday.",
      starter: "I wish",
      accepted: ["i wish we had a long summer holiday"],
      correct: "I wish we had a long summer holiday.",
      explanation: "\"It's a pity that + S + don't/doesn't + V\" (thật đáng tiếc là...) có nghĩa tương đương với \"<b>I wish + S + V(quá khứ đơn)</b>\" (điều ước không có thật ở hiện tại).<br>→ <i>I wish we had a long summer holiday.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "When I was young, walking barefoot was a common experience at school.",
      starter: "I used",
      accepted: ["i used to walk barefoot at school when i was young"],
      correct: "I used to walk barefoot at school when I was young.",
      explanation: "Một thói quen/trạng thái phổ biến trong quá khứ nhưng không còn ở hiện tại được diễn đạt bằng \"<b>used to + V</b>\".<br>→ <i>I used to walk barefoot at school when I was young.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "Talking face to face was the primary way of communicating in the past.",
      starter: "People used",
      accepted: ["people used to talk face to face in the past"],
      correct: "People used to talk face to face in the past.",
      explanation: "\"N + was the primary way of V-ing + in the past\" có thể viết lại bằng \"<b>People used to + V</b>\" — cùng diễn tả thói quen phổ biến trong quá khứ.<br>→ <i>People used to talk face to face in the past.</i>"
    }
  ]
};
