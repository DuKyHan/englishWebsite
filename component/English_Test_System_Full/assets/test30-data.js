const TEST = {
  id: "test30",
  grade: "Grade 6 — Global Success",
  unit: "Unit 3: My friends",
  title: "Grade 6 · Unit 3: My friends · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test30.html",
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
    { id: "VI", title: "Look at the dictionary entry of “idea”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    robertCloze: "One of my best friends' names is Robert. He lives (17) ________ England and we always meet in summer. He (18) ________ his summer holidays on the beach in Huelva. Robert is fifteen and he's very funny and generous. I like being with him because he always (19) ________ me laugh. We enjoy playing volleyball and riding (20) ________ bikes. He also loves music and he plays the guitar and he is learning to play the piano. I don't play (21) ________ instruments but I love music too. Robert doesn't like computer games. He likes playing with friends in the (22) ________. He has a dog called Tobby.",
    annaReading: "Hi, my name is Anna. This is the photo of my family. There are six people in my family: my grandmother, my grandfather, my mother, my father, my elder brother and me. These are my grandparents. They are old and retired. They love gardening and doing morning exercise. This is my father. He is forty-one and he is a doctor. He works in a big hospital. This is my mother. She is thirty-eight. She is an Art teacher. She teaches in a secondary school. This is my elder brother. His name is Jack. He is sixteen and he is a high school student. I'm ten and I'm the youngest in my family. Our family lives in a house on Nguyen Hue Street. The house is a little small but it's lovely. There is a living room, two bedrooms, a bathroom and a kitchen. However, the thing I love most is that the house also has a big garden and a large pond behind it. These are the places where my family likes to relax or fish on weekends.",
    ideaEntry: {
      word: "idea", ipa: "/aɪˈdɪə/", pos: "noun",
      def: "1. A plan, thought, or suggestion for doing something. 2. An opinion, belief, or understanding of something.",
      examples: [
        "I've got a <b>good idea</b>—let's go to the beach tomorrow!",
        "Do you <b>have any ideas</b> for Sarah's birthday present?",
        "I <b>have no idea</b> where my keys are. Have you seen them?",
        "She has a <b>rough idea</b> of how much the trip will cost, but she needs to check the prices again."
      ]
    }
  },
  images: {
    signNoWifi: "assets/images/sign_no_wifi.jpg",
    noticeCookingClass: "assets/images/notice_cooking_class.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "laughs", B: "cooks", C: "sleeps", D: "finds" },
      correct: "D",
      explanation: "Phần gạch chân là đuôi \"-s\". \"laughs\" /læfs/, \"cooks\" /kʊks/, \"sleeps\" /sliːps/ đều có \"-s\" phát âm là <b>/s/</b> (sau âm vô thanh). Riêng \"finds\" /faɪndz/ có \"-s\" phát âm là <b>/z/</b> (sau âm hữu thanh \"d\") → khác biệt, đáp án D."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "short", B: "comic", C: "blonde", D: "long" },
      correct: "A",
      explanation: "Phần gạch chân là chữ cái \"o\". \"comic\" /ˈkɒmɪk/, \"blonde\" /blɒnd/, \"long\" /lɒŋ/ đều có \"o\" phát âm là <b>/ɒ/</b>. Riêng \"short\" /ʃɔːrt/ có \"o\" phát âm là <b>/ɔːr/</b> → khác biệt, đáp án A."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "funny", B: "superb", C: "comic", D: "friendly" },
      correct: "B",
      explanation: "\"funny\" /ˈfʌni/, \"comic\" /ˈkɒmɪk/, \"friendly\" /ˈfrendli/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"superb\" /suːˈpɜːrb/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án B."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "magazine", B: "attention", C: "creative", D: "appearance" },
      correct: "A",
      explanation: "\"attention\" /əˈtenʃn/, \"creative\" /kriˈeɪtɪv/, \"appearance\" /əˈpɪərəns/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"magazine\" /ˌmæɡəˈziːn/ có trọng âm rơi vào <b>âm tiết cuối</b> → khác biệt, đáp án A."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"Look at those kids over there! Who are they?\"",
      prompt: "Mary: \"They are pupils in grade 6. They ______ football on the school ground right now.\"",
      display: { A: "is playing", B: "play", C: "plays", D: "are playing" },
      correct: "D",
      explanation: "\"right now\" là dấu hiệu của thì hiện tại tiếp diễn; chủ ngữ \"They\" (số nhiều) đi với \"<b>are playing</b>\"."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Peter: \"Is this summer camp suitable for my 8-year-old brother?\"",
      prompt: "Jane: \"No, it isn't. The summer camp is only for students ______ between 10 and 15.\"",
      display: { A: "named", B: "aged", C: "called", D: "born" },
      correct: "B",
      explanation: "\"students <b>aged</b> between 10 and 15\" — \"aged\" (có độ tuổi là) đứng sau danh từ để chỉ độ tuổi của người."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Nick: \"Why do you like Lan so much?\"",
      prompt: "Hoa: \"Lan is always ______. She studies more than four hours a day and never misses her homework.\"",
      display: { A: "shy", B: "hard-working", C: "smart", D: "active" },
      correct: "B",
      explanation: "\"studies more than four hours a day and never misses her homework\" mô tả tính cách \"<b>hard-working</b>\" (chăm chỉ)."
    },
    { id: 8, section: "I", type: "mcq",
      context: "An: \"Kaity helped me fix my bicycle yesterday without asking for anything.\"",
      prompt: "Ba: \"She is really ______. She always enjoys helping other people.\"",
      display: { A: "loving", B: "kind", C: "confident", D: "clever" },
      correct: "B",
      explanation: "Giúp đỡ người khác mà không đòi hỏi gì và luôn thích giúp đỡ người khác → tính cách \"<b>kind</b>\" (tốt bụng)."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Teacher: \"Are you ready to take the final English test, Daisy?\"",
      prompt: "Daisy: \"Yes, I'm ______. I have studied very hard all week.\"",
      display: { A: "confidentially", B: "confident", C: "confidently", D: "unconfident" },
      correct: "B",
      explanation: "Sau \"I'm\" cần một tính từ: \"I'm <b>confident</b>\" (tôi tự tin), không dùng trạng từ (confidentially/confidently) hay dạng phủ định không hợp ngữ cảnh."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Mother: \"Don't forget to wash your ______ before meals, son.\"",
      prompt: "Son: \"Yes, I will do it now, mom.\"",
      display: { A: "class", B: "lamp", C: "hands", D: "book" },
      correct: "C",
      explanation: "Trước bữa ăn cần rửa \"<b>hands</b>\" (tay) — thói quen vệ sinh cá nhân thông thường."
    },
    { id: 11, section: "I", type: "mcq",
      context: "John: \"Shall we stay a bit longer? The party is so fun!\"",
      prompt: "David: \"No, it's ______ to go home. It's very late now.\"",
      display: { A: "time", B: "like", C: "sure", D: "now" },
      correct: "A",
      explanation: "\"It's <b>time</b> to + V\" (đã đến lúc làm gì) là cấu trúc cố định, phù hợp với việc trời đã khuya."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Nam: \"Can you tell me what your new best friend looks like?\"",
      prompt: "Long: ______",
      display: {
        A: "She is very clever.",
        B: "She has blonde hair and blue eyes.",
        C: "She is a funny girl.",
        D: "She is beautiful."
      },
      correct: "B",
      explanation: "Câu hỏi \"what ... looks like\" hỏi về <b>ngoại hình</b>; chỉ có \"<b>She has blonde hair and blue eyes.</b>\" miêu tả ngoại hình, các đáp án khác miêu tả tính cách."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Julie: \"Have a great time at the Wickedly Wonderful summer camp!\"",
      prompt: "Janet: ______",
      display: { A: "Thanks! The same to you!", B: "OK, we do, too.", C: "What's happening?", D: "I've no idea." },
      correct: "A",
      explanation: "Đáp lại lời chúc \"Have a great time!\" bằng lời cảm ơn và chúc lại: \"<b>Thanks! The same to you!</b>\""
    },
    { id: 14, section: "I", type: "mcq",
      context: "Nhi: \"I'm Julie and my best friend is Janet. We are 12 years old and we're in the same class.\"",
      prompt: "Vy: ______",
      display: {
        A: "Both of us are tall and slim.",
        B: "I am a bit quiet and shy.",
        C: "Oh, tell me more about your friendship!",
        D: "What do you usually do?"
      },
      correct: "C",
      explanation: "Phản hồi tự nhiên khi nghe ai đó giới thiệu về tình bạn của họ là thể hiện sự quan tâm, muốn biết thêm: \"<b>Oh, tell me more about your friendship!</b>\""
    },

    // ---------------- SECTION II (15-16) — sign & notice ----------------
    { id: 15, section: "II", type: "mcq", image: "signNoWifi",
      prompt: "What does this sign say?",
      display: {
        A: "You have to pay money to use the Wi-Fi.",
        B: "You can use Wi-Fi for free here.",
        C: "Wi-Fi is only available in some places.",
        D: "There is no Wi-Fi connection available here."
      },
      correct: "D",
      explanation: "Biểu tượng Wi-Fi bị gạch chéo cùng dòng chữ \"NO WI-FI (Network Disconnected)\" → không có kết nối Wi-Fi ở đây, đáp án D."
    },
    { id: 16, section: "II", type: "mcq", image: "noticeCookingClass",
      prompt: "What is the purpose of this notice at the community center?",
      display: {
        A: "To open a new Italian restaurant in the neighborhood.",
        B: "To invite people to learn how to cook Italian food in a class.",
        C: "To sign up for a sporting event at the camp.",
        D: "To advertise an Italian language course."
      },
      correct: "B",
      explanation: "Tấm biển \"Italian Cooking Class — Learn to cook authentic pasta & pizza tonight!\" → mời mọi người tham gia lớp học nấu ăn Ý, đáp án B."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "robertCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "in", B: "on", C: "to", D: "at" },
      correct: "A",
      explanation: "\"lives <b>in</b> England\" — giới từ \"in\" dùng với tên quốc gia."
    },
    { id: 18, section: "III", type: "mcq", passage: "robertCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "spends", B: "passes", C: "stays", D: "gives" },
      correct: "A",
      explanation: "\"<b>spends</b> his summer holidays on the beach\" — cụm cố định \"spend + time + on/at + place\" (dành thời gian ở đâu)."
    },
    { id: 19, section: "III", type: "mcq", passage: "robertCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "makes", B: "does", C: "takes", D: "gets" },
      correct: "A",
      explanation: "\"always <b>makes</b> me laugh\" — cấu trúc \"make + sb + V (nguyên mẫu)\" nghĩa là khiến ai đó làm gì."
    },
    { id: 20, section: "III", type: "mcq", passage: "robertCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "we", B: "our", C: "us", D: "ours" },
      correct: "B",
      explanation: "Cần tính từ sở hữu đứng trước danh từ \"bikes\": \"riding <b>our</b> bikes\"."
    },
    { id: 21, section: "III", type: "mcq", passage: "robertCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "many", B: "no", C: "some", D: "any" },
      correct: "D",
      explanation: "Câu phủ định \"I don't play ___ instruments\" dùng \"<b>any</b>\", không dùng \"some\"."
    },
    { id: 22, section: "III", type: "mcq", passage: "robertCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "road", B: "yard", C: "floor", D: "street" },
      correct: "B",
      explanation: "\"playing with friends in the <b>yard</b>\" — \"yard\" (sân) là nơi hợp lý để chơi cùng bạn bè tại nhà."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "annaReading",
      prompt: "Anna's grandparents enjoy working in the garden and exercising in the morning.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"They love gardening and doing morning exercise.\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "annaReading",
      prompt: "Anna's father is a doctor who works in a small hospital near their house.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"he is a doctor. He works in a <b>big</b> hospital\" — bệnh viện lớn, không phải nhỏ, và không nói là gần nhà."
    },
    { id: 25, section: "IV", type: "truefalse", passage: "annaReading",
      prompt: "Jack is older than Anna.",
      correct: "True",
      explanation: "Đúng. Bài đọc: Jack \"is sixteen\" còn Anna \"I'm ten\" — Jack lớn tuổi hơn Anna."
    },
    { id: 26, section: "IV", type: "truefalse", passage: "annaReading",
      prompt: "There are three bedrooms in Anna's house.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"There is a living room, <b>two bedrooms</b>, a bathroom and a kitchen\" — chỉ có hai phòng ngủ, không phải ba."
    },
    { id: 27, section: "IV", type: "mcq", passage: "annaReading",
      prompt: "What does Anna's mother do?",
      display: { A: "She is an Art teacher.", B: "She is a doctor.", C: "She is a high school student.", D: "She stays at home to do gardening." },
      correct: "A",
      explanation: "Bài đọc: \"This is my mother... She is an Art teacher.\" → đáp án A."
    },
    { id: 28, section: "IV", type: "mcq", passage: "annaReading",
      prompt: "Where does Anna's family like to relax or fish on weekends?",
      display: {
        A: "In the garden and the large pond behind their house.",
        B: "In a secondary school.",
        C: "On Nguyen Hue Street.",
        D: "In a big hospital."
      },
      correct: "A",
      explanation: "Bài đọc: \"the house also has a big garden and a large pond behind it. These are the places where my family likes to relax or fish on weekends.\" → đáp án A."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "Wickedly Wonderful is a very popular summer _____________ in the UK for children.",
      wordGiven: "CAMP", accepted: ["camp"], correct: "camp",
      explanation: "\"camp\" (n, trại) ở đây đã đúng dạng danh từ số ít cần dùng sau \"summer\", không cần biến đổi thêm."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "The children love doing outdoor _____________ on the beach like surfing and riding bikes.",
      wordGiven: "ACTIVE", accepted: ["activities"], correct: "activities",
      explanation: "Cần danh từ số nhiều đứng sau tính từ \"outdoor\". <b>active</b> (adj) → <b>activity</b> (n) → <b>activities</b> (số nhiều, hoạt động)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "My best friend is very _____________, so he plays basketball and football every afternoon.",
      wordGiven: "SPORT", accepted: ["sporty"], correct: "sporty",
      explanation: "Cần tính từ đứng sau \"very\". <b>sport</b> (n) → <b>sporty</b> (adj, +y, có tinh thần thể thao)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "Lan is a _____________ student who always does her homework carefully.",
      wordGiven: "HARD", accepted: ["hard-working"], correct: "hard-working",
      explanation: "Cần tính từ ghép đứng trước danh từ \"student\". <b>hard</b> (adj/adv) → <b>hard-working</b> (adj, chăm chỉ)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "The teacher was happy because the students answered all the questions _____________.",
      wordGiven: "CONFIDENT", accepted: ["confidently"], correct: "confidently",
      explanation: "Cần trạng từ bổ nghĩa cho động từ \"answered\". <b>confident</b> (adj) → <b>confidently</b> (adv, +ly, một cách tự tin)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "Tomorrow, our class will go on a field trip to visit a _____________ farm.",
      wordGiven: "MILK", accepted: ["dairy"], correct: "dairy",
      explanation: "Cần tính từ đứng trước danh từ \"farm\" mang nghĩa \"nông trại sản xuất sữa\". <b>milk</b> (n, sữa) → <b>dairy</b> (adj, thuộc về sữa)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "ideaEntry",
      prompt: "I don't know why the lights are not working. I ___________________ how to fix this computer.",
      accepted: ["have no idea"], correct: "have no idea",
      explanation: "Từ điển cho ví dụ \"I <b>have no idea</b> where my keys are.\" — khớp với ngữ cảnh không biết cách sửa máy tính."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "ideaEntry",
      prompt: "If you don't know what to cook for dinner, I have a ___________________. Let's make some pizza!",
      accepted: ["good idea", "great idea"], correct: "good idea / great idea",
      explanation: "Từ điển cho ví dụ \"I've got a <b>good idea</b>\" hoặc \"It was a <b>great idea</b>\" — khớp với ngữ cảnh đề xuất món ăn."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "My best friend likes playing football after school.",
      starter: "My best friend is fond",
      accepted: ["my best friend is fond of playing football after school"],
      correct: "My best friend is fond of playing football after school.",
      explanation: "\"like + V-ing\" (thích làm gì) có nghĩa tương đương với \"<b>be fond of + V-ing</b>\" (yêu thích làm gì).<br>→ <i>My best friend is fond of playing football after school.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "She has blonde hair and blue eyes.",
      starter: "Her hair",
      accepted: ["her hair is blonde and she has blue eyes"],
      correct: "Her hair is blonde and she has blue eyes.",
      explanation: "Câu miêu tả ngoại hình \"<b>has + N1 and N2</b>\" có thể tách thành hai vế: \"<b>Her hair is + adj, and she has + N2</b>\", giữ nguyên nghĩa.<br>→ <i>Her hair is blonde and she has blue eyes.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "He plays basketball very well and he is a sporty boy.",
      starter: "He is a good",
      accepted: ["he is a good basketball player and he is a sporty boy"],
      correct: "He is a good basketball player and he is a sporty boy.",
      explanation: "\"play + môn thể thao + well\" (chơi giỏi) có nghĩa tương đương với \"<b>be a good + môn thể thao + player</b>\" (là một tay chơi giỏi).<br>→ <i>He is a good basketball player and he is a sporty boy.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "We have a plan to visit a milk farm and do a treasure hunt in the field tomorrow.",
      starter: "We are",
      accepted: ["we are going to visit a milk farm and do a treasure hunt in the field tomorrow"],
      correct: "We are going to visit a milk farm and do a treasure hunt in the field tomorrow.",
      explanation: "\"have a plan to + V\" (có kế hoạch làm gì) có nghĩa tương đương với \"<b>be going to + V</b>\" (dự định làm gì, sắp làm gì).<br>→ <i>We are going to visit a milk farm and do a treasure hunt in the field tomorrow.</i>"
    }
  ]
};
