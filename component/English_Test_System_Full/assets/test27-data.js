const TEST = {
  id: "test27",
  grade: "Grade 6 — Global Success",
  unit: "Unit 2: My house",
  title: "Grade 6 · Unit 2: My house · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test27.html",
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
    { id: "VI", title: "Look at the dictionary entry of “favorite”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    namCloze: "This is my friend. He is Nam. He is twelve years old. He is a student. He lives in a big villa (17) ________ the suburb of the city. There are 4 people in his family: his parents, his younger sister and (18) ________. His father works as an engineer. His mother is a teacher. And his younger sister is a (19) ________. There are 5 rooms in his house: a living room, a kitchen, a bathroom, a bedroom and a toilet. The living room is his (20) ________ place because he (21) ________ sit on the armchair and watch television (22) ________ his family.",
    brownReading: "Mr. Brown's house has got four bedrooms, a living room, a dining room, a kitchen, a bathroom and a separate toilet. There is a toilet in the bathroom too. The bedrooms and the bathroom are upstairs, and the living room, the dining room, the kitchen and the toilet are downstairs. The first bedroom is Mr. and Mrs. Brown's, the second one is Tom's, the third one is Mary's, and the last one is Anne's. There is a baby bed in her bedroom too, but there is no baby living there. When you enter Mr. Brown's house, the room on the left is the living room, and the room on the right is the dining room. Where is the kitchen? It is behind the dining room. And where is the toilet? It is straight on, in front of you. There is a garden behind the house, but it is not big. Is there a garden in front of the house too? Yes, there is, but it is very narrow. When you go upstairs, Mr. and Mrs. Brown's bedroom is on the left. The bedroom on your right is Tom's, and the bathroom is between his bedroom and Mary's. Anne's bedroom is behind Mary's.",
    favoriteEntry: {
      word: "favorite", ipa: "/ˈfeɪvərɪt/", pos: "adjective, noun",
      def: "adjective: liked more than others of the same kind. noun: a person or thing that is liked more than others.",
      examples: [
        "September is my <b>favorite month</b> of the year.",
        "What is your <b>favorite subject</b> at school?",
        "This song is an <b>old favorite</b> of mine.",
        "Pizza is a <b>firm favorite</b> among children."
      ]
    }
  },
  images: {
    signNoShoes: "assets/images/sign_no_shoes.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "plants", B: "lamps", C: "desks", D: "windows" },
      correct: "D",
      explanation: "Phần gạch chân là đuôi \"-s\". \"plants\" /plænts/, \"lamps\" /læmps/, \"desks\" /desks/ đều có \"-s\" phát âm là <b>/s/</b> (vì đứng sau âm vô thanh). Riêng \"windows\" /ˈwɪndoʊz/ có \"-s\" phát âm là <b>/z/</b> (vì đứng sau âm hữu thanh \"w\") → khác biệt, đáp án D."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "book", B: "look", C: "cook", D: "room" },
      correct: "D",
      explanation: "Phần gạch chân là \"oo\". \"book\" /bʊk/, \"look\" /lʊk/, \"cook\" /kʊk/ đều có \"oo\" phát âm là <b>/ʊ/</b>. Riêng \"room\" /ruːm/ có \"oo\" phát âm là <b>/uː/</b> → khác biệt, đáp án D."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "cooker", B: "photo", C: "between", D: "pillow" },
      correct: "C",
      explanation: "\"cooker\" /ˈkʊkər/, \"photo\" /ˈfoʊtoʊ/, \"pillow\" /ˈpɪloʊ/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"between\" /bɪˈtwiːn/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án C."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "computer", B: "grandmother", C: "furniture", D: "family" },
      correct: "A",
      explanation: "\"grandmother\" /ˈɡrænmʌðər/, \"furniture\" /ˈfɜːrnɪtʃər/, \"family\" /ˈfæməli/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"computer\" /kəmˈpjuːtər/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án A."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"______ does Nam go to school every day?\"",
      prompt: "Ben: \"He usually goes by bicycle.\"",
      display: { A: "How", B: "What", C: "Which", D: "Who" },
      correct: "A",
      explanation: "Câu trả lời nêu phương tiện di chuyển (\"by bicycle\") nên câu hỏi phải dùng \"<b>How</b>\" (bằng cách nào)."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Lan: \"Look! Cambridge College has a lot of pupils.\"",
      prompt: "Hoa: \"Yes, and it also has many modern ______.\"",
      display: { A: "classrooms", B: "classroom", C: "classroom's", D: "classrooms'" },
      correct: "A",
      explanation: "Sau \"many\" cần danh từ đếm được ở dạng <b>số nhiều</b>, không thêm sở hữu cách: \"many modern <b>classrooms</b>\"."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Phong: \"Let's go to the football pitch to play, Minh.\"",
      prompt: "Minh: \"We can't. ______ any children in the pitch right now because it's locked.\"",
      display: { A: "There is", B: "There are", C: "There aren't", D: "There isn't" },
      correct: "C",
      explanation: "\"any\" thường dùng trong câu phủ định/nghi vấn với danh từ số nhiều (\"children\"): \"<b>There aren't</b> any children in the pitch...\""
    },
    { id: 8, section: "I", type: "mcq",
      context: "Mary: \"Where is your mother, Peter?\"",
      prompt: "Peter: \"She is in the ______. It is the best place to prepare family meals.\"",
      display: { A: "living room", B: "bathroom", C: "bedroom", D: "kitchen" },
      correct: "D",
      explanation: "\"<b>kitchen</b>\" (nhà bếp) là nơi phù hợp nhất để \"prepare family meals\" (chuẩn bị bữa ăn gia đình)."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Anna: \"Your room looks so beautiful!\"",
      prompt: "Jane: \"Thanks! I have lots of K-Pop stars' posters ______ the walls.\"",
      display: { A: "on", B: "above", C: "under", D: "in" },
      correct: "A",
      explanation: "Áp phích thường được dán/gắn trực tiếp lên tường, dùng giới từ \"<b>on</b> the walls\" (trên tường)."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Lucy: \"Please turn the ______ on, Daisy. It's really hot in this classroom.\"",
      prompt: "Daisy: \"OK, I will do it right now.\"",
      display: { A: "light", B: "faucet", C: "fan", D: "television" },
      correct: "C",
      explanation: "Vì trời nóng nên cần bật \"<b>fan</b>\" (quạt) để làm mát phòng, không phải đèn, vòi nước hay ti vi."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Mom: \"My son, your room is so ______! Dirty clothes, toys, and books are everywhere!\"",
      prompt: "Son: \"I'm sorry, Mom. I will clean it up this afternoon.\"",
      display: { A: "cozy", B: "crazy", C: "tidy", D: "messy" },
      correct: "D",
      explanation: "Phòng có \"dirty clothes, toys, and books ... everywhere\" (quần áo bẩn, đồ chơi, sách vở khắp nơi) → phòng \"<b>messy</b>\" (bừa bộn)."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Alan: \"Where do your grandparents live, Nam?\"",
      prompt: "Nam: \"In a town house ______ in the suburb of the city.\"",
      display: { A: "kitchen", B: "bookshelf", C: "floor", D: "located" },
      correct: "D",
      explanation: "\"<b>located</b>\" (nằm ở, tọa lạc) là tính từ/quá khứ phân từ phù hợp để mô tả vị trí của ngôi nhà."
    },
    { id: 13, section: "I", type: "mcq",
      context: "David: \"Do you like your new house, Phong?\"",
      prompt: "Phong: \"Yes, ______, because it has a big yard for me to play football.\"",
      display: { A: "I do", B: "I don't", C: "I can", D: "I am" },
      correct: "A",
      explanation: "Câu hỏi dùng trợ động từ \"Do\" nên câu trả lời ngắn phải khớp: \"Yes, <b>I do</b>.\""
    },
    { id: 14, section: "I", type: "mcq",
      context: "Nick: \"My house is too small, but it has a nice balcony where I can read books.\"",
      prompt: "Sam: \"______! I wish I had a balcony too.\"",
      display: { A: "I don't think so", B: "Goodbye", C: "You're welcome", D: "That sounds great" },
      correct: "D",
      explanation: "\"<b>That sounds great!</b>\" là lời đáp thể hiện sự thích thú, phù hợp trước khi bày tỏ mong muốn \"I wish I had a balcony too\"."
    },

    // ---------------- SECTION II (15-16) — message & sign ----------------
    { id: 15, section: "II", type: "mcq",
      context: "\"Hi! Are you free? Can you help me with number 4 on page 25? I'm stuck on this one. Thanks!\"",
      prompt: "What does the message tell you?",
      display: {
        A: "The sender wants to chat about music and entertainment.",
        B: "The sender wants to borrow a textbook from you.",
        C: "The sender doesn't want to do their homework.",
        D: "The sender wants help with one specific question."
      },
      correct: "D",
      explanation: "Tin nhắn nhờ giúp đỡ với \"number 4 on page 25\" (một câu hỏi cụ thể) → người gửi cần giúp đỡ với một câu hỏi cụ thể, đáp án D."
    },
    { id: 16, section: "II", type: "mcq", image: "signNoShoes",
      prompt: "What does this notice mean?",
      display: {
        A: "You must take off your footwear before entering.",
        B: "Please wear your shoes inside the house.",
        C: "Do not leave your personal shoes outside the door.",
        D: "New outdoor sandals are allowed inside this house."
      },
      correct: "A",
      explanation: "Biểu tượng cấm giày dép (giày bị gạch chéo) → phải cởi giày dép trước khi vào, đáp án A."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "namCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "on", B: "in", C: "to", D: "at" },
      correct: "B",
      explanation: "\"lives in a big villa <b>in</b> the suburb of the city\" — giới từ \"in\" đi với khu vực/vùng địa lý rộng (ngoại ô)."
    },
    { id: 18, section: "III", type: "mcq", passage: "namCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "he", B: "him", C: "himself", D: "his" },
      correct: "B",
      explanation: "\"his parents, his younger sister and <b>him</b>\" — đây là danh sách liệt kê các thành viên (tân ngữ), dùng đại từ tân ngữ \"him\", không dùng đại từ phản thân \"himself\"."
    },
    { id: 19, section: "III", type: "mcq", passage: "namCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "partner", B: "pupil", C: "person", D: "member" },
      correct: "B",
      explanation: "\"his younger sister is a <b>pupil</b>\" — \"pupil\" (học sinh nhỏ tuổi) phù hợp với người em gái đang đi học."
    },
    { id: 20, section: "III", type: "mcq", passage: "namCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "popular", B: "famous", C: "favorite", D: "pleasant" },
      correct: "C",
      explanation: "\"The living room is his <b>favorite</b> place\" — \"favorite place\" (nơi yêu thích) là cụm quen thuộc."
    },
    { id: 21, section: "III", type: "mcq", passage: "namCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "must", B: "can", C: "should", D: "will" },
      correct: "B",
      explanation: "\"he <b>can</b> sit on the armchair and watch television\" — \"can\" diễn tả khả năng/thói quen thoải mái làm gì đó, phù hợp hơn \"must/should\" (mang tính bắt buộc)."
    },
    { id: 22, section: "III", type: "mcq", passage: "namCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "with", B: "about", C: "by", D: "for" },
      correct: "A",
      explanation: "\"watch television <b>with</b> his family\" — giới từ \"with\" (cùng với) đi với việc xem TV cùng gia đình."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "brownReading",
      prompt: "There are two toilets in Mr. Brown's house.",
      correct: "True",
      explanation: "Đúng. Bài đọc: nhà có \"a separate toilet\" và \"There is a toilet in the bathroom too\" — tổng cộng hai toilet."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "brownReading",
      prompt: "The dining room is on the left when you enter the house.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"the room on the left is the living room, and the room on the right is the dining room\" — phòng ăn ở bên phải, không phải bên trái."
    },
    { id: 25, section: "IV", type: "truefalse", passage: "brownReading",
      prompt: "Tom's bedroom and Mary's bedroom are next to each other.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"the bathroom is between his (Tom's) bedroom and Mary's\" — phòng tắm nằm giữa hai phòng, nên chúng không liền kề nhau."
    },
    { id: 26, section: "IV", type: "truefalse", passage: "brownReading",
      prompt: "There is a small garden behind the house.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"There is a garden behind the house, but it is not big.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "brownReading",
      prompt: "Where is the kitchen located?",
      display: { A: "Next to the living room.", B: "In front of the toilet.", C: "Behind the dining room.", D: "Upstairs, near the bathroom." },
      correct: "C",
      explanation: "Bài đọc: \"Where is the kitchen? It is <b>behind the dining room</b>.\" → đáp án C."
    },
    { id: 28, section: "IV", type: "mcq", passage: "brownReading",
      prompt: "Whose bedroom is located behind Mary's bedroom?",
      display: { A: "Tom's", B: "Anne's", C: "Mr. and Mrs. Brown's", D: "The baby's" },
      correct: "B",
      explanation: "Bài đọc: \"<b>Anne's</b> bedroom is behind Mary's.\" → đáp án B."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "There are four ______________ in my family: my parents, my sister, and me.",
      wordGiven: "MEMBER", accepted: ["members"], correct: "members",
      explanation: "Sau \"four\" cần danh từ đếm được ở dạng <b>số nhiều</b>. <b>member</b> (n) → <b>members</b> (n, số nhiều, thành viên)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "This living room is Nam's ______________ place to watch television.",
      wordGiven: "FAVOR", accepted: ["favorite"], correct: "favorite",
      explanation: "Cần tính từ đứng trước danh từ \"place\". <b>favor</b> (n) → <b>favorite</b> (adj, yêu thích)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "Nam is twelve years old and he lives in a big, beautiful ______________.",
      wordGiven: "VILLA", accepted: ["villa"], correct: "villa",
      explanation: "\"villa\" (biệt thự) ở đây đã đúng dạng danh từ số ít cần dùng sau \"a big, beautiful\", không cần biến đổi thêm."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "My house is in a small village, so it is very quiet and ______________.",
      wordGiven: "PEACE", accepted: ["peaceful"], correct: "peaceful",
      explanation: "Cần tính từ song song với \"quiet\". <b>peace</b> (n) → <b>peaceful</b> (adj, +ful, yên bình)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "My mother cooks very well; she always makes ______________ meals.",
      wordGiven: "DELIGHT", accepted: ["delightful"], correct: "delightful",
      explanation: "Cần tính từ đứng trước danh từ \"meals\". <b>delight</b> (n/v) → <b>delightful</b> (adj, +ful, ngon tuyệt, thú vị)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "In conclusion, my house is a place full of love and ______________.",
      wordGiven: "HAPPY", accepted: ["happiness"], correct: "happiness",
      explanation: "Sau \"love and\" cần danh từ song song. <b>happy</b> (adj) → <b>happiness</b> (n, +ness, hạnh phúc)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "favoriteEntry",
      prompt: "Maths is my ___________________ because I love working with numbers.",
      accepted: ["favorite subject"], correct: "favorite subject",
      explanation: "Từ điển cho ví dụ \"What is your <b>favorite subject</b> at school?\" — khớp với ngữ cảnh môn học yêu thích vì thích làm việc với các con số."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "favoriteEntry",
      prompt: "My grandmother always sings that song; it is an ___________________ of hers.",
      accepted: ["old favorite"], correct: "old favorite",
      explanation: "Từ điển cho ví dụ \"This song is an <b>old favorite</b> of mine.\" — khớp với ngữ cảnh bài hát yêu thích lâu năm của bà."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "There are a sink, a fridge, and a cooker in our kitchen.",
      starter: "Our kitchen has",
      accepted: ["our kitchen has a sink, a fridge, and a cooker"],
      correct: "Our kitchen has a sink, a fridge, and a cooker.",
      explanation: "\"There are + N1, N2, and N3 + in + nơi chốn\" có thể viết lại bằng \"<b>Nơi chốn + has + N1, N2, and N3</b>\", giữ nguyên nghĩa.<br>→ <i>Our kitchen has a sink, a fridge, and a cooker.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "The bus station isn't far from the new shopping center.",
      starter: "The new shopping center is close",
      accepted: ["the new shopping center is close to the bus station"],
      correct: "The new shopping center is close to the bus station.",
      explanation: "\"A + isn't far from + B\" (A không xa B) có nghĩa tương đương với \"<b>B + is close to + A</b>\" (B gần A).<br>→ <i>The new shopping center is close to the bus station.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "My bedroom is between the bathroom and my parents' bedroom.",
      starter: "The bathroom and my parents' bedroom have",
      accepted: ["the bathroom and my parents' bedroom have my bedroom between them"],
      correct: "The bathroom and my parents' bedroom have my bedroom between them.",
      explanation: "\"A + is between + B and C\" (A nằm giữa B và C) có thể viết lại bằng \"<b>B and C + have + A + between them</b>\" (B và C có A nằm giữa chúng).<br>→ <i>The bathroom and my parents' bedroom have my bedroom between them.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "No house in the village is more comfortable than my house.",
      starter: "My house is the most",
      accepted: ["my house is the most comfortable house in the village"],
      correct: "My house is the most comfortable house in the village.",
      explanation: "\"No + N + in + nơi chốn + is + more + adj + than + X\" (so sánh hơn phủ định) có nghĩa tương đương với \"<b>X + is + the most + adj + N + in + nơi chốn</b>\" (so sánh nhất).<br>→ <i>My house is the most comfortable house in the village.</i>"
    }
  ]
};
