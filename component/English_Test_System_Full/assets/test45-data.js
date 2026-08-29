const TEST = {
  id: "test45",
  grade: "Grade 7 — Global Success",
  unit: "Unit 5: Vietnamese Food and Drink",
  title: "Grade 7 · Unit 5: Vietnamese Food and Drink · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test45.html",
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
    { id: "VI", title: "Look at the dictionary entry of “recipe”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    omeletteCloze: "Do you have a favourite dish? Going to a restaurant for a special dish is great, but I like cooking by (17) ________. My favourite dish is a very common food. It is an omelette with minced tomatoes. My omelette is similar (18) ________ the normal one, but the difference is that I add minced potatoes when beating the eggs. Everybody may think that it is not special, but it is a very special dish for me because of some (19) ________. I remember that my mum usually told me how to cook it because she was always busy and she (20) ________ me to make something to eat by myself. My mum has always made (21) ________ omelettes and she taught me her ways. Omelette is a general meal for everyone. Kids, teenagers or even adults can enjoy eating it. However, we should not eat too (22) ________ omelette because it may give us more calories than the amount that our body needs.",
    healthyEatingReading: "Healthy eating is about feeling great and having more energy. If you choose the right foods, your healthy diet will be a tasty diet, too. You can still enjoy your favourite sweet and salty foods, but too much sugar and salt is bad for your body. Dairy products like milk, cheese, and yoghurt are great because they contain calcium and keep your teeth and bones healthy. You should choose low-fat dairy products. Meat, fish, eggs, beans, and nuts are important, too. They keep our bodies healthy and they give us energy to work and play. Whole grains are an important part of every meal. If you eat lots of whole grains, you will have a healthy heart. Whole grains are in bread, cereal, pasta, and rice. Dark bread and brown rice are great sources of whole grains. Fruit and vegetables are the most important part of a healthy diet. They are low in calories and full of vitamins. Eat lots of fruit and vegetables with every meal, and as snacks during the day. Fruit and vegetables with darker colours have more vitamins.",
    recipeEntry: {
      word: "recipe", ipa: "/ˈresəpi/", pos: "noun",
      def: "A set of instructions that tells you how to cook something and the ingredients you need for it.",
      examples: [
        "Do you know a good <b>recipe for</b> chocolate cake?",
        "You should <b>follow a recipe</b> carefully when baking a cake for the first time.",
        "My grandmother gave me a <b>secret recipe</b> for this traditional soup."
      ]
    }
  },
  images: {
    noticeDoNotFeedBirds: "assets/images/notice_do_not_feed_birds.jpg",
    noticeDoNotSitFurniture: "assets/images/notice_do_not_sit_furniture.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "pepper", B: "egg", C: "chicken", D: "lemon" },
      correct: "C",
      explanation: "Phần gạch chân là chữ cái \"e\". \"pepper\" /ˈpepər/, \"egg\" /eɡ/, \"lemon\" /ˈlemən/ đều có \"e\" phát âm là <b>/e/</b>. Riêng \"chicken\" /ˈtʃɪkɪn/ có \"e\" phát âm là <b>/ɪ/</b> → khác biệt, đáp án C."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "orange", B: "coffee", C: "onion", D: "bottle" },
      correct: "C",
      explanation: "Phần gạch chân là chữ cái \"o\". \"orange\" /ˈɒrɪndʒ/, \"coffee\" /ˈkɒfi/, \"bottle\" /ˈbɒtl/ đều có \"o\" phát âm là <b>/ɒ/</b>. Riêng \"onion\" /ˈʌnjən/ có \"o\" phát âm là <b>/ʌ/</b> → khác biệt, đáp án C."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "combine", B: "apply", C: "happen", D: "decide" },
      correct: "C",
      explanation: "\"combine\" /kəmˈbaɪn/, \"apply\" /əˈplaɪ/, \"decide\" /dɪˈsaɪd/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"happen\" /ˈhæpən/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án C."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "money", B: "market", C: "coffee", D: "guitar" },
      correct: "D",
      explanation: "\"money\" /ˈmʌni/, \"market\" /ˈmɑːrkɪt/, \"coffee\" /ˈkɒfi/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"guitar\" /ɡɪˈtɑːr/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án D."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"What are the main ingredients of Pho, Hoa?\"",
      prompt: "Hoa: \"Well, Pho is made mainly __________ rice noodles and beef or chicken.\"",
      display: { A: "of", B: "from", C: "by", D: "with" },
      correct: "A",
      explanation: "\"be made mainly <b>of</b> + N\" (được làm chủ yếu từ) là cụm cố định khi nguyên liệu vẫn còn nhận ra được trong sản phẩm."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Waiter: \"Would you like __________ apple after your meal, sir?\"",
      prompt: "Customer: \"Yes, please. That sounds refreshing.\"",
      display: { A: "an", B: "any", C: "a", D: "some" },
      correct: "A",
      explanation: "\"apple\" bắt đầu bằng nguyên âm, cần mạo từ \"<b>an</b>\" trong câu hỏi mời (offer)."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Mom: \"Drink your drink, Billy! It helps you become taller.\"",
      prompt: "Billy: \"Yes, mom. __________ is always my favourite drink for breakfast.\"",
      display: { A: "Milk", B: "Soup", C: "Cola", D: "Juice" },
      correct: "A",
      explanation: "\"<b>Milk</b>\" (sữa) phù hợp với ngữ cảnh giúp trẻ cao lớn hơn, là đồ uống bổ dưỡng cho bữa sáng."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Lan: \"You cook really well! Who taught you to cook popular __________?\"",
      prompt: "Mai: \"My mother did. She has many great recipes.\"",
      display: { A: "diet", B: "meals", C: "recipes", D: "dishes" },
      correct: "D",
      explanation: "\"cook popular <b>dishes</b>\" (nấu các món ăn phổ biến) phù hợp nhất — \"dish\" chỉ món ăn cụ thể được nấu."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Mary: \"Why is Jane so excited today?\"",
      prompt: "John: \"She's looking __________ to receiving the letter from her mother.\"",
      display: { A: "on", B: "for", C: "forward", D: "up" },
      correct: "C",
      explanation: "\"look <b>forward</b> to + N/V-ing\" (mong chờ điều gì) là cụm cố định."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Peter: \"I want to make an omelette but I don't know the recipe.\"",
      prompt: "Anna: \"Don't worry. Can you tell me __________ to cook this dish? I will help you.\"",
      display: { A: "way", B: "which", C: "how", D: "what" },
      correct: "C",
      explanation: "\"tell me <b>how</b> to cook\" (chỉ tôi cách nấu) — từ để hỏi \"how\" kết hợp với \"to V\" hỏi về cách thức."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Phong: \"John plays the guitar so beautifully!\"",
      prompt: "Nam: \"I agree. No one else in the class plays the guitar __________ John.\"",
      display: { A: "as well", B: "as far as", C: "as soon as", D: "as well as" },
      correct: "D",
      explanation: "So sánh ngang bằng với trạng từ: \"<b>as well as</b>\" (giỏi bằng, hay bằng) — không ai chơi guitar giỏi bằng John."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Customer: \"Can I have the menu, please?\"",
      prompt: "Waiter: \"__________\"",
      display: { A: "I'm not hungry.", B: "I went there yesterday.", C: "Yes, here you are.", D: "No, I don't like it." },
      correct: "C",
      explanation: "\"<b>Yes, here you are.</b>\" là câu trả lời tự nhiên khi đưa thứ gì đó (thực đơn) cho khách."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Daisy: \"Do you want to try the chicken soup I cooked?\"",
      prompt: "Alex: \"__________\"",
      display: { A: "Do you want trying it?", B: "You do want to try?", C: "No, I am cooking.", D: "Yes, I'd love to!" },
      correct: "D",
      explanation: "\"<b>Yes, I'd love to!</b>\" là câu trả lời đồng ý tự nhiên nhất khi được mời thử món ăn."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Mark: \"There isn't anything left for dinner, so I have to eat at a restaurant.\"",
      prompt: "Lucy: \"__________\"",
      display: { A: "No, there is some bread left.", B: "That's a good idea. Let's go together!", C: "Restaurants are very expensive.", D: "I don't like eating dinner late." },
      correct: "B",
      explanation: "\"<b>That's a good idea. Let's go together!</b>\" phản hồi tự nhiên, đồng ý và đề nghị cùng đi ăn nhà hàng."
    },

    // ---------------- SECTION II (15-16) — sign & notice ----------------
    { id: 15, section: "II", type: "mcq", image: "noticeDoNotFeedBirds",
      prompt: "What does this notice require you to do?",
      display: {
        A: "Do not feed the birds any food.",
        B: "Feed the birds without letting others know.",
        C: "Play with the birds.",
        D: "Only give the birds water, do not feed them."
      },
      correct: "A",
      explanation: "Biển ghi \"DO NOT FEED THE BIRDS\" nghĩa là không được cho chim ăn → \"<b>Do not feed the birds any food.</b>\", đáp án A."
    },
    { id: 16, section: "II", type: "mcq", image: "noticeDoNotSitFurniture",
      prompt: "What is the meaning of this sign?",
      display: {
        A: "You can sit on the furniture if you want.",
        B: "Only some pieces of furniture can be used for sitting.",
        C: "Sitting on the furniture is not allowed here.",
        D: "You may sit on the furniture only during designated breaks."
      },
      correct: "C",
      explanation: "Biển ghi \"WARNING: DO NOT SIT ON THE FURNITURE\" nghĩa là không được phép ngồi lên đồ nội thất → \"<b>Sitting on the furniture is not allowed here.</b>\", đáp án C."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "omeletteCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "myself", B: "my", C: "me", D: "mine" },
      correct: "A",
      explanation: "\"cooking by <b>myself</b>\" (tự mình nấu ăn) — đại từ phản thân dùng với giới từ \"by\" để nhấn mạnh việc tự làm."
    },
    { id: 18, section: "III", type: "mcq", passage: "omeletteCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "to", B: "for", C: "with", D: "than" },
      correct: "A",
      explanation: "\"be similar <b>to</b> + N\" (tương tự với) là cụm cố định với giới từ \"to\"."
    },
    { id: 19, section: "III", type: "mcq", passage: "omeletteCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "answers", B: "thoughts", C: "reasons", D: "purposes" },
      correct: "C",
      explanation: "\"because of some <b>reasons</b>\" (vì một vài lý do) phù hợp với ngữ cảnh giải thích tại sao món ăn đặc biệt với tác giả."
    },
    { id: 20, section: "III", type: "mcq", passage: "omeletteCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "wanted", B: "let", C: "suggested", D: "made" },
      correct: "A",
      explanation: "\"<b>wanted</b> me to make something\" (muốn tôi tự làm gì đó) — cấu trúc \"want sb to V\" phù hợp với ngữ cảnh mẹ bận rộn muốn con tự lập."
    },
    { id: 21, section: "III", type: "mcq", passage: "omeletteCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "common", B: "normal", C: "correct", D: "incredible" },
      correct: "D",
      explanation: "\"made <b>incredible</b> omelettes\" (làm những món trứng tuyệt vời) — tính từ ca ngợi tài nấu ăn của mẹ."
    },
    { id: 22, section: "III", type: "mcq", passage: "omeletteCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "much", B: "many", C: "little", D: "few" },
      correct: "A",
      explanation: "\"too <b>much</b> omelette\" — \"omelette\" ở đây là danh từ không đếm được (lượng trứng ăn), cần \"much\"."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "healthyEatingReading",
      prompt: "You must completely stop eating your favourite sweet and salty foods.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"You can still enjoy your favourite sweet and salty foods, but too much sugar and salt is bad for your body.\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "healthyEatingReading",
      prompt: "Dairy products are good for your teeth and bones.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Dairy products like milk, cheese, and yoghurt are great because they contain calcium and keep your teeth and bones healthy.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "healthyEatingReading",
      prompt: "Whole grains can help you have a healthy heart.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"If you eat lots of whole grains, you will have a healthy heart.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "healthyEatingReading",
      prompt: "Light-coloured fruit and vegetables have more vitamins than darker ones.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"Fruit and vegetables with darker colours have more vitamins.\" — màu càng đậm càng nhiều vitamin, ngược lại với nhận định trên."
    },
    { id: 27, section: "IV", type: "mcq", passage: "healthyEatingReading",
      prompt: "Why are meat, fish, eggs, beans, and nuts important for us?",
      display: { A: "They give us energy to work and play.", B: "They have a lot of sugar and salt.", C: "They are the only sources of calcium.", D: "They contain very few vitamins." },
      correct: "A",
      explanation: "Bài đọc: \"They keep our bodies healthy and they give us energy to work and play.\" → đáp án A."
    },
    { id: 28, section: "IV", type: "mcq", passage: "healthyEatingReading",
      prompt: "According to the text, when should you eat fruit and vegetables?",
      display: { A: "With every meal and as snacks.", B: "Only before you go to sleep.", C: "Only when you feel tired.", D: "Instead of eating whole grains." },
      correct: "A",
      explanation: "Bài đọc: \"Eat lots of fruit and vegetables with every meal, and as snacks during the day.\" → đáp án A."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "We are looking forward to the exciting _____________ Food Fair this Friday.",
      wordGiven: "TRADITION", accepted: ["traditional"], correct: "traditional",
      explanation: "Cần tính từ trước \"Food Fair\". <b>tradition</b> (n) → <b>traditional</b> (adj, truyền thống)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "Bun Bo Hue originates from Hue, a city in _____________ Vietnam.",
      wordGiven: "CENTRE", accepted: ["central"], correct: "central",
      explanation: "Cần tính từ trước \"Vietnam\". <b>centre</b> (n) → <b>central</b> (adj, trung tâm/miền Trung)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The chef gave a short cooking _____________ on how to make a clear broth.",
      wordGiven: "DEMONSTRATE", accepted: ["demonstration"], correct: "demonstration",
      explanation: "Cần danh từ sau \"cooking\". <b>demonstrate</b> (v) → <b>demonstration</b> (n, buổi trình diễn/hướng dẫn)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "My mother always makes _____________ omelettes for breakfast.",
      wordGiven: "INCREDIBLE", accepted: ["incredible"], correct: "incredible",
      explanation: "\"incredible\" (adj, tuyệt vời) đã đúng hình thức tính từ cần dùng trước \"omelettes\" — từ cho sẵn giữ nguyên."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "After selecting _____________ beef in the market, we boil it with bones.",
      wordGiven: "FRESHNESS", accepted: ["fresh"], correct: "fresh",
      explanation: "Cần tính từ trước \"beef\". <b>freshness</b> (n) → <b>fresh</b> (adj, tươi)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "This hot pot is a _____________ version of local Vietnamese food.",
      wordGiven: "TYPIFY", accepted: ["typical"], correct: "typical",
      explanation: "Cần tính từ trước \"version\". <b>typify</b> (v) → <b>typical</b> (adj, điển hình)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "recipeEntry",
      prompt: "This restaurant is famous because they use a _____________________ passed down for generations.",
      accepted: ["secret recipe"], correct: "secret recipe",
      explanation: "Từ điển cho ví dụ \"My grandmother gave me a <b>secret recipe</b> for this traditional soup.\" — khớp với ngữ cảnh công thức được lưu truyền qua nhiều thế hệ."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "recipeEntry",
      prompt: "If you want the cookies to taste perfect, you must _____________________ exactly.",
      accepted: ["follow a recipe"], correct: "follow a recipe",
      explanation: "Từ điển cho ví dụ \"You should <b>follow a recipe</b> carefully when baking a cake for the first time.\" — khớp với ngữ cảnh làm theo công thức để có món ăn hoàn hảo."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "What is the price of a kilo of this pork?",
      starter: "How much",
      accepted: ["how much does a kilo of this pork cost", "how much is a kilo of this pork"],
      correct: "How much does a kilo of this pork cost? (hoặc: How much is a kilo of this pork?)",
      explanation: "\"What is the price of + N?\" (giá của cái gì là bao nhiêu) có thể viết lại bằng \"<b>How much does/is + N (+ cost)?</b>\", giữ nguyên nghĩa hỏi về giá cả.<br>→ <i>How much does a kilo of this pork cost?</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "There is no bread left at the bakery.",
      starter: "There isn't",
      accepted: ["there isn't any bread left at the bakery"],
      correct: "There isn't any bread left at the bakery.",
      explanation: "\"There is no + N\" (không có gì) có thể viết lại bằng \"<b>There isn't any + N</b>\", giữ nguyên nghĩa phủ định.<br>→ <i>There isn't any bread left at the bakery.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "No other student in the class plays the guitar as well as John.",
      starter: "John plays",
      accepted: ["john plays the guitar the best in the class", "john plays the guitar better than any other student in the class"],
      correct: "John plays the guitar the best in the class. (hoặc: better than any other student in the class)",
      explanation: "Câu so sánh dạng phủ định \"No other + N + as well as + S\" (không ai giỏi bằng S) có thể viết lại bằng so sánh nhất \"<b>S + play + the best</b>\" hoặc so sánh hơn \"<b>S + better than any other + N</b>\", giữ nguyên nghĩa.<br>→ <i>John plays the guitar the best in the class.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "Learning how to make a clear broth from beef bones is quite a difficult task.",
      starter: "It is quite",
      accepted: ["it is quite a difficult task to learn how to make a clear broth from beef bones", "it is quite difficult to learn how to make a clear broth from beef bones"],
      correct: "It is quite a difficult task to learn how to make a clear broth from beef bones. (hoặc: quite difficult to learn how to make a clear broth from beef bones)",
      explanation: "\"V-ing... is quite + adj/N\" (việc gì đó khá là...) có thể viết lại bằng chủ ngữ giả \"<b>It is quite + adj/N + to V</b>\", giữ nguyên nghĩa.<br>→ <i>It is quite a difficult task to learn how to make a clear broth from beef bones.</i>"
    }
  ]
};
