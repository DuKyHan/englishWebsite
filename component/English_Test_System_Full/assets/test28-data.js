const TEST = {
  id: "test28",
  grade: "Grade 6 — Global Success",
  unit: "Unit 2: My house",
  title: "Grade 6 · Unit 2: My house · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test28.html",
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
    { id: "VI", title: "Look at the dictionary entry of “collection”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    houseCloze: "I like my big house. It has got two bedrooms: my parents' and mine. Upstairs also there is a bathroom (17) ________ I wash and brush my teeth. Downstairs there is a big kitchen where my mother cooks and (18) ________ meals, a dining room to eat altogether and a living room where we watch TV (19) ________ sit and relax. Outdoors my parents park (20) ________ cars in the garage and we have a beautiful garden (21) ________ trees. My house also has an attic where we store lots (22) ________ old things.",
    peterReading: "My name is Peter. I live in a house near the sea. It's an old house, about a century old, and it's very small. There are two bedrooms upstairs but no bathroom. The bathroom is downstairs next to the kitchen and there's a living room where there's a lovely old fireplace. There's a garden in front of the house. The garden goes down to the beach and in spring and summer there are flowers everywhere. I live with my parents, and we have a lot of visitors. I love my house for many reasons: the garden, the flowers in summer, the fire in winter, but the best thing is the view from my bedroom window.",
    collectionEntry: {
      word: "collection", ipa: "/kəˈlekʃn/", pos: "noun",
      def: "1. a group of objects that have been put together. 2. the act of bringing things together.",
      examples: [
        "The museum has an amazing <b>art collection</b>.",
        "He has a large <b>stamp collection</b>.",
        "The library has a great <b>collection of books</b> about history.",
        "Garbage collection happens every Tuesday morning."
      ]
    }
  },
  images: {
    signNoPets: "assets/images/sign_no_pets_icon.jpg",
    signBabySleeping: "assets/images/sign_baby_sleeping.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "there", B: "though", C: "then", D: "bath" },
      correct: "D",
      explanation: "Phần gạch chân là \"th\". \"there\" /ðer/, \"though\" /ðoʊ/, \"then\" /ðen/ đều có \"th\" phát âm là <b>/ð/</b> (hữu thanh). Riêng \"bath\" /bæθ/ có \"th\" phát âm là <b>/θ/</b> (vô thanh) → khác biệt, đáp án D."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "chairs", B: "plants", C: "desks", D: "maps" },
      correct: "A",
      explanation: "Phần gạch chân là đuôi \"-s\". \"plants\" /plænts/, \"desks\" /desks/, \"maps\" /mæps/ đều có \"-s\" phát âm là <b>/s/</b> (sau âm vô thanh). Riêng \"chairs\" /tʃerz/ có \"-s\" phát âm là <b>/z/</b> (sau âm hữu thanh \"r\") → khác biệt, đáp án A."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "behind", B: "bedroom", C: "country", D: "brother" },
      correct: "A",
      explanation: "\"bedroom\" /ˈbedruːm/, \"country\" /ˈkʌntri/, \"brother\" /ˈbrʌðər/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"behind\" /bɪˈhaɪnd/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án A."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "dishwasher", B: "department", C: "grandparent", D: "beautiful" },
      correct: "B",
      explanation: "\"dishwasher\" /ˈdɪʃwɑːʃər/, \"grandparent\" /ˈɡrænperənt/, \"beautiful\" /ˈbjuːtɪfl/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"department\" /dɪˈpɑːrtmənt/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án B."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"Are there __________ pictures in your bedroom, David?\"",
      prompt: "David: \"Yes, I have a few posters of my favorite football team on the wall.\"",
      display: { A: "some", B: "any", C: "three", D: "the" },
      correct: "B",
      explanation: "\"any\" được dùng trong câu hỏi với danh từ số nhiều: \"Are there <b>any</b> pictures...?\""
    },
    { id: 6, section: "I", type: "mcq",
      context: "Mary: \"Peter is very kind. He gave the English textbook to __________ friend yesterday.\"",
      prompt: "John: \"Wow, he always likes helping people around him.\"",
      display: { A: "him", B: "him's", C: "his's", D: "his" },
      correct: "D",
      explanation: "Cần tính từ sở hữu đứng trước danh từ \"friend\": \"gave the textbook to <b>his</b> friend\"."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Minh: \"Does Mai often __________ her bicycle to school every morning?\"",
      prompt: "Lan: \"No, she usually walks because her house is very close to the school gate.\"",
      display: { A: "drides", B: "drive", C: "ride", D: "rides" },
      correct: "C",
      explanation: "Câu hỏi bắt đầu bằng trợ động từ \"Does\" nên động từ chính phải ở dạng <b>nguyên mẫu không \"to\"</b>: \"Does Mai often <b>ride</b> her bicycle...?\""
    },
    { id: 8, section: "I", type: "mcq",
      context: "Alice: \"Can you lend me a ruler, please?\"",
      prompt: "Ben: \"Look! There __________ a ruler on the desk over there. You can take it.\"",
      display: { A: "do", B: "are", C: "is", D: "are not" },
      correct: "C",
      explanation: "\"a ruler\" là danh từ số ít nên dùng \"There <b>is</b> a ruler...\""
    },
    { id: 9, section: "I", type: "mcq",
      context: "Nam: \"Where do the students often play soccer after class?\"",
      prompt: "Phong: \"They usually gather in the __________ because it is very large.\"",
      display: { A: "schoolmate", B: "schoolyard", C: "school gate", D: "schoolwork" },
      correct: "B",
      explanation: "\"<b>schoolyard</b>\" (sân trường) là nơi rộng lớn phù hợp để tụ tập chơi bóng đá."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Anna: \"I am reading a book about Vietnamese cultures. Where do the Tay and Nung people mostly live?\"",
      prompt: "Lucy: \"They mostly live in __________, which are beautiful traditional houses made of wood and bamboo.\"",
      display: { A: "apartments", B: "stilt houses", C: "town houses", D: "villas" },
      correct: "B",
      explanation: "\"<b>stilt houses</b>\" (nhà sàn) là loại nhà truyền thống làm bằng gỗ và tre của người Tày, Nùng."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Tom: \"Your new house looks so beautiful!\"",
      prompt: "Peter: \"Thank you! There is also a small green garden __________ the house where we grow flowers.\"",
      display: { A: "in front of", B: "under", C: "on", D: "between" },
      correct: "A",
      explanation: "\"<b>in front of</b> the house\" (phía trước ngôi nhà) là vị trí hợp lý cho một khu vườn nhỏ trồng hoa."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Teacher: \"Is English your favorite class, Nam?\"",
      prompt: "Nam: \"__________ It's very interesting and I love learning new vocabulary.\"",
      display: { A: "Yes, this is.", B: "Yes, I think so.", C: "No, there isn't.", D: "No, it doesn't." },
      correct: "B",
      explanation: "\"<b>Yes, I think so.</b>\" là cách trả lời đồng ý tự nhiên, tiếp nối bằng lý do \"It's very interesting...\""
    },
    { id: 13, section: "I", type: "mcq",
      context: "Jane: \"What are you doing, Tim?\"",
      prompt: "Tim: \"I'm drawing a big cottage with tall towers. My school is __________ a \"Design Your Dream House\" contest.\"",
      display: { A: "making", B: "make", C: "holding", D: "hold" },
      correct: "C",
      explanation: "\"is <b>holding</b> a contest\" (đang tổ chức một cuộc thi) — thì hiện tại tiếp diễn, \"hold a contest\" là cụm cố định (tổ chức cuộc thi)."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Tony: \"Let's visit Peter's house this weekend. It's a house near the sea.\"",
      prompt: "Chris: \"__________\"",
      display: {
        A: "He lives there with his parents.",
        B: "The bookstore is to the left of her house.",
        C: "I love my bedroom window view.",
        D: "Great! I heard that it's an old but lovely house."
      },
      correct: "D",
      explanation: "\"<b>Great! I heard that it's an old but lovely house.</b>\" là phản hồi tự nhiên nhất khi đồng ý với lời rủ đi thăm nhà."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signNoPets",
      prompt: "What does the sign tell you?",
      display: {
        A: "You can buy beautiful pets here.",
        B: "You must keep your pets in your arms.",
        C: "Pets should be fed in this place.",
        D: "Pets are not allowed in this area."
      },
      correct: "D",
      explanation: "Biển ghi \"NO PETS ALLOWED\" (kèm hình con chó bị gạch chéo) → không được mang thú cưng vào khu vực này, đáp án D."
    },
    { id: 16, section: "II", type: "mcq", image: "signBabySleeping",
      prompt: "What does this notice mean?",
      display: {
        A: "The baby is crying because the room is too quiet.",
        B: "Don't be loud because the baby is sleeping.",
        C: "You should talk loudly to wake the baby up.",
        D: "The baby wants to play loudly with you."
      },
      correct: "B",
      explanation: "Biển ghi \"Baby Is Sleeping — Quiet Please\" → không nên gây ồn vì em bé đang ngủ, đáp án B."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "houseCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "where", B: "when", C: "which", D: "who" },
      correct: "A",
      explanation: "\"a bathroom <b>where</b> I wash and brush my teeth\" — đại từ quan hệ chỉ nơi chốn \"where\" thay cho \"bathroom\"."
    },
    { id: 18, section: "III", type: "mcq", passage: "houseCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "burns", B: "bakes", C: "prepares", D: "dunks" },
      correct: "C",
      explanation: "\"my mother cooks and <b>prepares</b> meals\" — \"prepares\" (chuẩn bị) đi song song với \"cooks\" (nấu), cùng chỉ hành động làm bữa ăn."
    },
    { id: 19, section: "III", type: "mcq", passage: "houseCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "because", B: "but", C: "so", D: "or" },
      correct: "D",
      explanation: "\"where we watch TV <b>or</b> sit and relax\" — \"or\" nối hai hoạt động thay thế nhau (xem TV hoặc ngồi thư giãn)."
    },
    { id: 20, section: "III", type: "mcq", passage: "houseCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "total", B: "old", C: "beautiful", D: "heavy" },
      correct: "C",
      explanation: "\"my parents park <b>beautiful</b> cars in the garage\" — \"beautiful\" mô tả những chiếc xe đẹp mà bố mẹ đỗ trong ga-ra."
    },
    { id: 21, section: "III", type: "mcq", passage: "houseCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "full", B: "with", C: "inside", D: "about" },
      correct: "B",
      explanation: "\"a beautiful garden <b>with</b> trees\" — giới từ \"with\" (có, kèm theo) mô tả khu vườn có cây cối."
    },
    { id: 22, section: "III", type: "mcq", passage: "houseCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "dishes", B: "ideas", C: "secrets", D: "things" },
      correct: "D",
      explanation: "\"we store lots ... old <b>things</b>\" — trong bốn lựa chọn, \"things\" (đồ vật) là từ phù hợp nhất về nghĩa để chỉ những đồ cũ được cất trong gác mái."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "peterReading",
      prompt: "Peter's house is big and new.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"It's an old house, about a century old, and it's very small.\" — nhà cũ và nhỏ, không to và mới."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "peterReading",
      prompt: "The bathroom is on the ground floor.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"The bathroom is downstairs next to the kitchen.\" — phòng tắm ở tầng trệt."
    },
    { id: 25, section: "IV", type: "truefalse", passage: "peterReading",
      prompt: "Peter lives alone in the house.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"I live with my parents, and we have a lot of visitors.\" — Peter sống cùng bố mẹ, không phải một mình."
    },
    { id: 26, section: "IV", type: "truefalse", passage: "peterReading",
      prompt: "There are flowers in the garden during spring and summer.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"in spring and summer there are flowers everywhere.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "peterReading",
      prompt: "Where is the living room?",
      display: { A: "Downstairs with a fireplace", B: "Next to the kitchen", C: "Upstairs near the bedrooms", D: "In front of the garden" },
      correct: "A",
      explanation: "Bài đọc: phòng tắm ở tầng trệt cạnh bếp, và \"there's a living room where there's a lovely old fireplace\" → phòng khách ở tầng trệt, có lò sưởi, đáp án A."
    },
    { id: 28, section: "IV", type: "mcq", passage: "peterReading",
      prompt: "What does Peter like most about his house?",
      display: { A: "The beautiful view from his bedroom window", B: "The large number of visitors", C: "The lovely old fireplace", D: "The flowers in the garden" },
      correct: "A",
      explanation: "Bài đọc: \"the best thing is <b>the view from my bedroom window</b>.\" → đáp án A."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "My sister and I love to visit our grandparents because their village is very ______________.",
      wordGiven: "QUIETLY", accepted: ["quiet"], correct: "quiet",
      explanation: "Sau \"is very\" cần <b>tính từ</b>, không dùng trạng từ. <b>quietly</b> (adv) → <b>quiet</b> (adj, yên tĩnh)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "The house looks so ______________ with a beautiful garden full of trees and flowers.",
      wordGiven: "LOVE", accepted: ["lovely"], correct: "lovely",
      explanation: "Cần tính từ sau \"looks so\". <b>love</b> (n/v) → <b>lovely</b> (adj, +ly, đáng yêu, xinh đẹp)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "Living in the countryside brings us a lot of ______________ and joy.",
      wordGiven: "HAPPY", accepted: ["happiness"], correct: "happiness",
      explanation: "Sau \"a lot of\" cần danh từ song song với \"joy\". <b>happy</b> (adj) → <b>happiness</b> (n, +ness, hạnh phúc)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "The school hall is decorated with many ______________ posters for the contest.",
      wordGiven: "COLOR", accepted: ["colorful", "colourful"], correct: "colorful",
      explanation: "Cần tính từ đứng trước danh từ \"posters\". <b>color</b> (n) → <b>colorful</b> (adj, +ful, nhiều màu sắc)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "Her bedroom is very ______________, so she always cleans it every weekend.",
      wordGiven: "MESS", accepted: ["messy"], correct: "messy",
      explanation: "Cần tính từ sau \"is very\". <b>mess</b> (n) → <b>messy</b> (adj, +y, bừa bộn)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "There are over eighty ______________ in Tom's unique collection.",
      wordGiven: "STAMP", accepted: ["stamps"], correct: "stamps",
      explanation: "Sau \"eighty\" cần danh từ đếm được ở dạng <b>số nhiều</b>. <b>stamp</b> (n) → <b>stamps</b> (n, số nhiều, con tem)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "collectionEntry",
      prompt: "You can visit the city gallery to see their beautiful new ___________________.",
      accepted: ["art collection"], correct: "art collection",
      explanation: "Từ điển cho ví dụ \"The museum has an amazing <b>art collection</b>.\" — khớp với ngữ cảnh phòng trưng bày nghệ thuật."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "collectionEntry",
      prompt: "The school has an interesting ___________________ written by local authors.",
      accepted: ["collection of books"], correct: "collection of books",
      explanation: "Từ điển cho ví dụ \"The library has a great <b>collection of books</b> about history.\" — khớp với ngữ cảnh bộ sưu tập sách của các tác giả địa phương."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "The bookstore is to the left of her house.",
      starter: "Her house is",
      accepted: ["her house is to the right of the bookstore"],
      correct: "Her house is to the right of the bookstore.",
      explanation: "\"A + is to the left of + B\" (A ở bên trái B) có nghĩa tương đương với \"<b>B + is to the right of + A</b>\" (B ở bên phải A).<br>→ <i>Her house is to the right of the bookstore.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "There are over eight hundred stamps in Tom's collection.",
      starter: "Tom's collection has",
      accepted: ["tom's collection has over eight hundred stamps"],
      correct: "Tom's collection has over eight hundred stamps.",
      explanation: "\"There are + số lượng + N + in + N's + N2\" có thể viết lại bằng \"<b>N's + N2 + has + số lượng + N</b>\", giữ nguyên nghĩa.<br>→ <i>Tom's collection has over eight hundred stamps.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "I don't like sharing my room with my sister.",
      starter: "I am not keen",
      accepted: ["i am not keen on sharing my room with my sister"],
      correct: "I am not keen on sharing my room with my sister.",
      explanation: "\"S + don't/doesn't like + V-ing\" có nghĩa tương đương với \"<b>S + am/is/are + not keen on + V-ing</b>\" (không thích/không hứng thú với việc gì).<br>→ <i>I am not keen on sharing my room with my sister.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "There are some colorful posters on the bedroom wall.",
      starter: "The bedroom wall",
      accepted: ["the bedroom wall has some colorful posters on it"],
      correct: "The bedroom wall has some colorful posters on it.",
      explanation: "\"There are + some + adj + N + on + nơi chốn\" có thể viết lại bằng \"<b>Nơi chốn + has + some + adj + N + on it</b>\", giữ nguyên nghĩa.<br>→ <i>The bedroom wall has some colorful posters on it.</i>"
    }
  ]
};
