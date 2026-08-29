const TEST = {
  id: "test05",
  grade: "Grade 8 — Global Success",
  unit: "Unit 6: Lifestyles",
  title: "Grade 8 · Unit 6: Lifestyles · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test05.html",
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
    { id: "VI", title: "Look at the dictionary entry of “improve”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    computersCloze: "Computers are helpful in many ways. First, they are fast. They can work with information even more quickly (17) ________ a person. Second, computers can work with a lot of information at the same (18) ________. Third, they can store information (19) ________ a long time. They do not forget things that the common people do. Finally, computers are almost always (20) ________. They are not perfect, but they usually do not make mistakes. Recently, it is important to know about computers. There are a (21) ________ of things to learn. Many (22) ________ have computers at work. Therefore, most universities have day and night courses in Computer Science. Another way to learn is from a book, or from a friend. After a few hours of practice, you can work with computers.",
    mongoliaReading: "For 3,000 years, Mongolians have lived in the rural areas, moving to search for new grassland for their cattle. They depend on their livestock for a living. Today, about half of Mongolia's population is living in the ger and moving their camping equipment several times a year. Nomadic life develops in summer and survives in winter. When the weather is warm, they work hard on their farms to get milk and make a type of milk alcohol, consuming meat from their sheep and goats. Once winter comes, temperatures drop quickly and they stay indoors and survive on horse meat.<br><br>With the rise of technology, changes in the Mongolian nomadic lifestyle are almost inevitable. Many herders use motorbikes to herd cattle and horses. To move their homes, they use trucks instead of ox carts. Solar panels are also becoming an addition to the ger, giving them access to electricity without being confined to one place. The nomads use solar energy to power TV sets and mobile phones.",
    improveEntry: {
      word: "improve", ipa: "/ɪmˈpruːv/", pos: "verb",
      def: "to become better than before; to make something/somebody better",
      examples: [
        "The doctor says her condition is beginning to <b>improve slightly</b>.",
        "We need to <b>improve communication</b> between departments.",
        "He is always looking for ways to <b>improve his performance</b>.",
        "The company has taken steps to <b>improve efficiency</b> and reduce costs.",
        "This course will help you <b>improve your skills</b> in public speaking."
      ]
    }
  },
  images: {
    signRecycling: "assets/images/sign_recycling.jpg",
    signStoreClosure: "assets/images/sign_store_closure.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "meat", B: "clean", C: "breakfast", D: "teach" },
      correct: "C",
      explanation: "Chữ \"ea\" trong \"meat\" /miːt/, \"clean\" /kliːn/, \"teach\" /tiːtʃ/ đều phát âm là <b>/iː/</b>. Riêng \"breakfast\" /ˈbrekfəst/ có \"ea\" phát âm là <b>/e/</b> → khác biệt, đáp án C."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "practice", B: "cupboard", C: "plan", D: "pray" },
      correct: "B",
      explanation: "Chữ \"p\" trong \"practice\" /ˈpræktɪs/, \"plan\" /plæn/, \"pray\" /preɪ/ đều được phát âm là <b>/p/</b>. Riêng \"cupboard\" /ˈkʌbərd/ có chữ \"p\" là <b>âm câm</b> (không phát âm) → khác biệt, đáp án B."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "interaction", B: "education", C: "dedication", D: "technology" },
      correct: "D",
      explanation: "\"interaction\" /ˌɪntərˈækʃn/, \"education\" /ˌedʒuˈkeɪʃn/, \"dedication\" /ˌdedɪˈkeɪʃn/ đều có trọng âm rơi vào <b>âm tiết thứ 3</b> (ngay trước đuôi -tion). Riêng \"technology\" /tekˈnɒlədʒi/ có trọng âm rơi vào <b>âm tiết thứ 2</b> → khác biệt, đáp án D."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "improve", B: "hurry", C: "cancel", D: "follow" },
      correct: "A",
      explanation: "\"hurry\" /ˈhʌri/, \"cancel\" /ˈkænsl/, \"follow\" /ˈfɒloʊ/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"improve\" /ɪmˈpruːv/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án A."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"This beach looks amazing!\"",
      prompt: "Anna: \"Wow! I think we ______ this place!\"",
      display: { A: "are going to love", B: "are loving", C: "are loved", D: "loved" },
      correct: "A",
      explanation: "Đây là một <b>dự đoán dựa trên bằng chứng ở hiện tại</b> (nhìn thấy bãi biển đẹp) → dùng cấu trúc <b>be going to + V</b>: <b>are going to love</b>."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Jack: \"I need to go to the airport tomorrow but I don't have a car.\"",
      prompt: "Mary: \"Don't worry. I ______ you to the airport tomorrow if you need a lift.\"",
      display: { A: "will take", B: "take", C: "took", D: "am taking" },
      correct: "A",
      explanation: "Đây là một <b>quyết định tức thời/lời đề nghị giúp đỡ</b> ngay tại thời điểm nói → dùng <b>will + V</b>: <b>will take</b>."
    },
    { id: 7, section: "I", type: "mcq",
      context: "John: \"What time does your flight arrive in the UK?\"",
      prompt: "David: \"My plane ______ at Manchester airport at 8 p.m. tomorrow evening.\"",
      display: { A: "is landing", B: "lands", C: "will land", D: "landed" },
      correct: "B",
      explanation: "Diễn tả một <b>lịch trình cố định</b> (giờ hạ cánh của máy bay) → dùng <b>thì hiện tại đơn</b> cho các sự kiện đã được lên lịch: <b>lands</b>."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Laura: \"Why is that author so popular in your country?\"",
      prompt: "Ben: \"He became internationally famous ______ his wonderful novels.\"",
      display: { A: "up", B: "at", C: "on", D: "for" },
      correct: "D",
      explanation: "\"famous <b>for</b> + N\" (nổi tiếng vì điều gì) là cụm giới từ cố định."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Doctor: \"To stay strong and active, what should we focus on?\"",
      prompt: "Patient: \"A ______ diet is essential for healthy growth.\"",
      display: { A: "balanced", B: "different", C: "common", D: "light" },
      correct: "A",
      explanation: "\"a <b>balanced</b> diet\" (chế độ ăn cân bằng, đầy đủ dinh dưỡng) là cụm cố định, phù hợp với việc duy trì sức khỏe."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Tourist: \"Do the farmers here use high-tech machines?\"",
      prompt: "Local guide: \"No, the local people still use ______ farming methods which have been used for hundreds of years.\"",
      display: { A: "unique", B: "unusual", C: "traditional", D: "best-known" },
      correct: "C",
      explanation: "Phương pháp \"đã được sử dụng hàng trăm năm\" → đó là những phương pháp <b>truyền thống (traditional)</b>."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Minh: \"Do you know the group of teenagers ______ picked up litter in the park yesterday?\"",
      prompt: "Lan: \"Yes, they are volunteers from the local high school.\"",
      display: { A: "who", B: "which", C: "what", D: "where" },
      correct: "A",
      explanation: "Cần đại từ quan hệ thay cho danh từ chỉ người \"teenagers\" làm chủ ngữ trong mệnh đề quan hệ → dùng <b>who</b>."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Teacher: \"Is it necessary for young people to learn about IT nowadays?\"",
      prompt: "Student: \"Yes, because it is important ______ about computers for our future careers.\"",
      display: { A: "to know", B: "know", C: "knew", D: "knowing" },
      correct: "A",
      explanation: "Cấu trúc \"It is important <b>to V</b>\" (điều gì đó là quan trọng để làm gì) — cần động từ nguyên mẫu có \"to\": <b>to know</b>."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Lan: \"Shall we join the special community clean-up day next Saturday?\"",
      prompt: "Hoa: \"______! A clean environment will bring more happiness to all residents.\"",
      display: { A: "What's happening?", B: "I don't think so.", C: "You're welcome.", D: "That sounds great!" },
      correct: "D",
      explanation: "\"<b>That sounds great!</b>\" là lời đáp lại đồng tình, hào hứng phù hợp với lời rủ tham gia hoạt động cộng đồng của Lan."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Nam: \"Do you think computers are better than humans at processing information?\"",
      prompt: "Ba: \"______! They can work with a lot of information at the same time and never forget.\"",
      display: { A: "Exactly", B: "It's hard to say", C: "You must be joking", D: "Not at all" },
      correct: "A",
      explanation: "\"<b>Exactly!</b>\" nghĩa là \"Chính xác!\" — thể hiện sự đồng tình mạnh mẽ, phù hợp với việc Ba đưa ra lý do ủng hộ ý kiến của Nam ngay sau đó."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signRecycling",
      prompt: "What does a recycling sign with arrows in a public area tell you to do?",
      display: {
        A: "You must throw all your trash on the ground.",
        B: "You can only buy recycled products here.",
        C: "Recycling is not allowed in this public area.",
        D: "You should recycle trash whenever you can."
      },
      correct: "D",
      explanation: "Biểu tượng tái chế (ba mũi tên xoay vòng) khuyến khích mọi người <b>tái chế rác bất cứ khi nào có thể</b>, đáp án D."
    },
    { id: 16, section: "II", type: "mcq", image: "signStoreClosure",
      prompt: "What does this notice say?",
      display: {
        A: "The store will be closed on September 4th.",
        B: "The store will be closed from September 2nd to September 3rd.",
        C: "The store will open again on September 4th.",
        D: "The store will open on September 2nd."
      },
      correct: "B",
      explanation: "Thông báo ghi \"the local market will be closed from September 2nd to September 3rd\" (cửa hàng/chợ đóng cửa từ ngày 2 đến ngày 3 tháng 9), đáp án B."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "computersCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "than", B: "like", C: "as", D: "that" },
      correct: "A",
      explanation: "Cấu trúc so sánh hơn: \"more quickly <b>than</b> a person\" (nhanh hơn con người)."
    },
    { id: 18, section: "III", type: "mcq", passage: "computersCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "time", B: "hour", C: "moment", D: "point" },
      correct: "A",
      explanation: "\"at the same <b>time</b>\" (cùng một lúc) là cụm cố định."
    },
    { id: 19, section: "III", type: "mcq", passage: "computersCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "during", B: "in", C: "for", D: "since" },
      correct: "C",
      explanation: "\"<b>for</b> + khoảng thời gian\" (store information for a long time) — dùng \"for\" trước khoảng thời gian như \"a long time\"."
    },
    { id: 20, section: "III", type: "mcq", passage: "computersCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "simple", B: "careful", C: "correct", D: "useful" },
      correct: "C",
      explanation: "Câu tiếp theo giải thích \"they are not perfect, but they usually do not make mistakes\" → máy tính hầu như luôn <b>đúng/chính xác (correct)</b>."
    },
    { id: 21, section: "III", type: "mcq", passage: "computersCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "much", B: "amount", C: "number", D: "deal" },
      correct: "C",
      explanation: "\"a <b>number</b> of things\" (một số lượng lớn thứ) là cụm cố định đi với danh từ đếm được \"things\"."
    },
    { id: 22, section: "III", type: "mcq", passage: "computersCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "companies", B: "groups", C: "machines", D: "jobs" },
      correct: "A",
      explanation: "\"Many <b>companies</b> have computers at work\" (nhiều công ty có máy tính tại nơi làm việc) — phù hợp với câu tiếp theo nói về các trường đại học có khóa học Khoa học Máy tính."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "mongoliaReading",
      prompt: "Mongolians have followed a nomadic lifestyle for thousands of years.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"For <b>3,000 years</b>, Mongolians have lived in the rural areas, moving to search for new grassland for their cattle.\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "mongoliaReading",
      prompt: "In winter, herders spend most of their time outdoors working on the farms.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"Once winter comes... they <b>stay indoors</b> and survive on horse meat\" — mùa đông họ ở trong nhà, không phải làm việc ngoài trời."
    },
    { id: 25, section: "IV", type: "truefalse", passage: "mongoliaReading",
      prompt: "Modern technology has prevented Mongolian herders from moving their homes.",
      correct: "False",
      explanation: "Sai. Bài đọc nói công nghệ giúp họ di chuyển nhà dễ dàng hơn (dùng xe tải thay xe bò) và có điện <b>mà không bị giới hạn ở một chỗ</b> (\"without being confined to one place\"), không phải ngăn cản việc di chuyển."
    },
    { id: 26, section: "IV", type: "truefalse", passage: "mongoliaReading",
      prompt: "Nomads can watch television and use mobile phones thanks to solar panels.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"The nomads use solar energy to power <b>TV sets and mobile phones</b>.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "mongoliaReading",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "The traditional lifestyle of Mongolian nomads and how technology changes it.",
        B: "The challenges that Mongolian nomads face during harsh winters.",
        C: "The historical reasons why Mongolians live in a ger and herd cattle.",
        D: "The benefits of using solar energy and motorbikes in rural Mongolia."
      },
      correct: "A",
      explanation: "Bài đọc giới thiệu lối sống du mục truyền thống của người Mông Cổ (đoạn 1) rồi nói về việc công nghệ đang làm thay đổi lối sống đó (đoạn 2) → đáp án A bao quát toàn bài."
    },
    { id: 28, section: "IV", type: "mcq", passage: "mongoliaReading",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "Ox carts are still the most popular means of transport to move gers.",
        B: "About 50% of the Mongolian population still lives in traditional gers today.",
        C: "Nomads eat meat from sheep and goats when the weather is warm.",
        D: "Solar panels allow nomads to have electricity while moving from place to place."
      },
      correct: "A",
      explanation: "Bài đọc nói rõ \"they use <b>trucks instead of ox carts</b>\" (họ dùng xe tải THAY CHO xe bò) để di chuyển nhà → câu A nói xe bò vẫn là phương tiện phổ biến nhất là SAI so với bài đọc."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "The dynamic team showed great ______________ to improving the local park.",
      wordGiven: "dedicate", accepted: ["dedication"], correct: "dedication",
      explanation: "Cần danh từ làm tân ngữ của \"showed great\". <b>dedicate</b> (v) → <b>dedication</b> (n, +ion): sự tận tâm, cống hiến."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "There are many ______________ activities organized to clean up the neighborhood streets.",
      wordGiven: "volunteer", accepted: ["voluntary", "volunteer"], correct: "voluntary / volunteer",
      explanation: "Cần tính từ/danh từ bổ nghĩa đứng trước \"activities\". <b>volunteer</b> (n, v) có thể dùng làm danh từ ghép (\"volunteer activities\") hoặc chuyển thành tính từ <b>voluntary</b> (+ary): cả hai đều mang nghĩa \"tự nguyện\"."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "Young people nowadays are encouraged to be more ______________ in their choices.",
      wordGiven: "depend", accepted: ["independent"], correct: "independent",
      explanation: "Cần tính từ đứng sau \"more\". <b>depend</b> (v) → <b>independent</b> (adj, in- + -ent): độc lập, tự chủ."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "Social networking sites facilitate better ______________ between people around the world.",
      wordGiven: "interact", accepted: ["interaction"], correct: "interaction",
      explanation: "Cần danh từ làm tân ngữ của \"facilitate better\". <b>interact</b> (v) → <b>interaction</b> (n, +ion): sự tương tác."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "The local elders still wear their ______________ clothes during traditional festivals.",
      wordGiven: "tradition", accepted: ["traditional"], correct: "traditional",
      explanation: "Cần tính từ đứng trước danh từ \"clothes\". <b>tradition</b> (n) → <b>traditional</b> (adj, +al): truyền thống."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "Eating a ______________ diet provides all the essential nutrients for healthy growth.",
      wordGiven: "balance", accepted: ["balanced"], correct: "balanced",
      explanation: "Cần tính từ đứng trước danh từ \"diet\". <b>balance</b> (v/n) → <b>balanced</b> (adj, +ed): cân bằng."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "improveEntry",
      prompt: "Upgrading the machinery allowed the factory to ____________________ and speed up production.",
      accepted: ["improve efficiency"], correct: "improve efficiency",
      explanation: "Từ điển cho ví dụ \"The company has taken steps to <b>improve efficiency</b> and reduce costs.\" — rất khớp với việc nâng cấp máy móc để tăng hiệu suất sản xuất."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "improveEntry",
      prompt: "Regular team meetings are essential to ____________________ between managers and employees.",
      accepted: ["improve communication"], correct: "improve communication",
      explanation: "Từ điển cho ví dụ \"We need to <b>improve communication</b> between departments.\" — khớp với việc họp nhóm định kỳ để cải thiện giao tiếp giữa quản lý và nhân viên."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "You shouldn't point at others while talking because it is impolite.",
      starter: "You had better",
      accepted: ["you had better not point at others while talking because it is impolite"],
      correct: "You had better not point at others while talking because it is impolite.",
      explanation: "\"shouldn't + V\" (không nên làm gì) có thể chuyển thành \"<b>had better not + V</b>\" (tốt hơn hết không nên làm gì) — cùng diễn tả lời khuyên không nên làm gì.<br>→ <i>You had better not point at others while talking because it is impolite.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "We must finish all the homework by Thursday to meet the deadline.",
      starter: "It is obligatory",
      accepted: ["it is obligatory for us to finish all the homework by thursday to meet the deadline"],
      correct: "It is obligatory for us to finish all the homework by Thursday to meet the deadline.",
      explanation: "\"S + must + V\" (bắt buộc phải làm gì) có thể chuyển thành \"<b>It is obligatory for + O + to V</b>\" (bắt buộc đối với ai đó phải làm gì) — trang trọng hơn.<br>→ <i>It is obligatory for us to finish all the homework by Thursday to meet the deadline.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "Many volunteer activities are organized to help the local community.",
      starter: "People organize",
      accepted: ["people organize many volunteer activities to help the local community"],
      correct: "People organize many volunteer activities to help the local community.",
      explanation: "Chuyển câu bị động sang chủ động: \"are organized\" → \"<b>People organize</b>\" (chủ ngữ chung chung khi không nêu rõ tác nhân).<br>→ <i>People organize many volunteer activities to help the local community.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "The park where children play is cleaned by volunteers every day.",
      starter: "Volunteers clean",
      accepted: ["volunteers clean the park where children play every day"],
      correct: "Volunteers clean the park where children play every day.",
      explanation: "Chuyển câu bị động sang chủ động: \"is cleaned by volunteers\" → \"<b>Volunteers clean</b>\", giữ nguyên mệnh đề quan hệ \"where children play\" bổ nghĩa cho \"the park\".<br>→ <i>Volunteers clean the park where children play every day.</i>"
    }
  ]
};
