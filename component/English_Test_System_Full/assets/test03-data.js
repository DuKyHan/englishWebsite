const TEST = {
  id: "test03",
  grade: "Grade 8 — Global Success",
  unit: "Unit 5: Our customs and traditions",
  title: "Grade 8 · Unit 5: Our customs and traditions · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test03.html",
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
    { id: "VI", title: "Look at the dictionary entry of “ceremony”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    tetFoodCloze: "Tet is the biggest festival in Vietnam. To celebrate Tet, Vietnamese people make many tasty traditional foods. The most important food includes Chung cakes, sausages, boiled chicken, spring rolls, and sticky rice. Chung cake is made (17) ______ sticky rice, pork, green beans, and other spices, wrapped in green leaves; however, this cake needs a lot of preparation. This cake can be kept for a long time, (18) ______ the weather is often humid during Tet. Other (19) ______ foods that cannot be missed to worship the ancestors are sausages, spring rolls, and sticky rice. Because sausages are difficult to make, people often buy them from famous (20) ______. However, sticky rice and spring rolls are easier to prepare and must be served immediately (21) ______ they are cooked, so they are (22) ______ made at home.",
    giftGivingReading: "Gift-giving is important in Viet Nam because of the significance of interpersonal relationships in Vietnamese culture.<br><br>First and foremost, do not encourage corruption. There is a clear cut between gift-giving and bribery. Nevertheless, it is common in Viet Nam to exchange small gifts on certain occasions such as anniversaries, Tet holidays... to express respect, love, appreciation, or gratitude. Gift-giving customs depend on the context. If it is a private gift for one Vietnamese partner, you should give the gift at a private occasion. If you have a gift for the whole office or company, you should give it after the business meeting with all the office employees.<br><br>Do not wrap a gift in black paper because this color is unlucky and associated with funerals in Viet Nam. Gifts that symbolize cutting, such as scissors, knives, and other sharp objects, should be avoided because they mean the cutting of the relationship.<br><br>Vietnamese people may or may not open these gifts when they are received; leave the option to them. You will also receive gifts and should defer to your host as to whether you should open them when receiving or not. Regardless of when it is opened or what it is, profuse thanks are always appropriate.",
    ceremonyEntry: {
      word: "ceremony", ipa: "/ˈserəməni/", pos: "noun",
      def: "a public or religious occasion that includes a series of formal actions",
      examples: [
        "The <b>wedding ceremony</b> was held in an old church.",
        "The <b>opening ceremony</b> of the Olympic Games was spectacular.",
        "An <b>award ceremony</b> will take place this evening to honor the winners.",
        "They held a <b>graduation ceremony</b> for the university students."
      ]
    }
  },
  images: {
    signRemoveShoes: "assets/images/sign_remove_shoes.jpg",
    signNoDumping: "assets/images/sign_no_dumping.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "many", B: "wake", C: "place", D: "take" },
      correct: "A",
      explanation: "\"wake\" /weɪk/, \"place\" /pleɪs/, \"take\" /teɪk/ đều có nguyên âm <b>/eɪ/</b>. Riêng \"many\" phát âm là /ˈmeni/ — chữ \"a\" ở đây đọc là <b>/e/</b>, khác hẳn ba từ còn lại → đáp án A."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "cook", B: "dance", C: "connect", D: "control" },
      correct: "B",
      explanation: "Chữ \"c\" trong \"cook\" /kʊk/, \"connect\" /kəˈnekt/, \"control\" /kənˈtroʊl/ đều phát âm là <b>/k/</b>. Riêng \"dance\" /dæns/ có chữ \"c\" phát âm là <b>/s/</b> → khác biệt, đáp án B."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "pagoda", B: "tradition", C: "complement", D: "behavior" },
      correct: "C",
      explanation: "\"pagoda\" /pəˈɡoʊdə/, \"tradition\" /trəˈdɪʃn/, \"behavior\" /bɪˈheɪvjər/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"complement\" /ˈkɑːmplɪmənt/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án C."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "manner", B: "respect", C: "chopstick", D: "custom" },
      correct: "B",
      explanation: "\"manner\" /ˈmænər/, \"chopstick\" /ˈtʃɑːpstɪk/, \"custom\" /ˈkʌstəm/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"respect\" /rɪˈspekt/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án B."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"What are the villagers doing over there, Hoa?\"",
      prompt: "Hoa: \"People are ______ bamboo poles with small bells and lanterns for the festival.\"",
      display: { A: "maintaining", B: "hanging", C: "cooking", D: "decorating" },
      correct: "D",
      explanation: "Cấu trúc \"<b>decorate + N + with + N</b>\" (trang trí cái gì bằng cái gì) rất khớp với câu: trang trí cây tre BẰNG chuông nhỏ và đèn lồng. \"hanging bamboo poles with...\" không hợp lý vì người ta không \"treo\" cả cây tre lên, mà treo chuông/đèn lồng LÊN cây tre."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Nam: \"Why do many people visit the village pagoda at Tet?\"",
      prompt: "An: \"They want to bow to Buddha and ______ for a lucky new year.\"",
      display: { A: "dance", B: "build", C: "pray", D: "place" },
      correct: "C",
      explanation: "\"bow to Buddha and <b>pray</b> for...\" (cúi lạy Phật và cầu nguyện cho...) là hành động phổ biến khi đi chùa đầu năm — \"pray for a lucky new year\" = cầu một năm mới may mắn."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Minh: \"Look at the night sky! Do you think there is life out there?\"",
      prompt: "Lan: \"Who knows? There are billions of stars in ______ space.\"",
      display: { A: "a", B: "the", C: "x (no article)", D: "an" },
      correct: "C",
      explanation: "\"space\" ở đây mang nghĩa chung, trừu tượng (không gian vũ trụ nói chung, danh từ không đếm được) nên <b>không dùng mạo từ</b> → \"in space\"."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Peter: \"Did the tourist manage to park his car near the souvenir shop?\"",
      prompt: "Mary: \"He tried to park his car but ______ space wasn't big enough.\"",
      display: { A: "a", B: "the", C: "an", D: "x (no article)" },
      correct: "B",
      explanation: "\"space\" ở đây là một chỗ đỗ xe <b>cụ thể</b> mà người khách đã cố gắng đỗ vào (cả hai người đang nói đều biết chỗ đó là chỗ nào) → dùng mạo từ xác định <b>the</b>."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Elena: \"Should I use the first name when calling a Vietnamese elder?\"",
      prompt: "Long: \"In Viet Nam, you shouldn't use only the first name to ______ people older than you.\"",
      display: { A: "speak", B: "say", C: "talk", D: "address" },
      correct: "D",
      explanation: "\"<b>address</b> sb\" nghĩa là gọi/xưng hô với ai đó. \"speak/talk to sb\" cần giới từ \"to\", còn \"say\" không đi trực tiếp với tân ngữ chỉ người theo cách này → \"address people\" là lựa chọn đúng."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Phong: \"What special food are we going to make for the family reunion?\"",
      prompt: "Mai: \"We are going to prepare ______ sticky rice served with grilled chicken.\"",
      display: { A: "five-colours", B: "five-colour", C: "five colours", D: "five-coloured" },
      correct: "B",
      explanation: "Tính từ ghép từ <b>số đếm + danh từ</b> đứng trước danh từ khác phải ở dạng <b>số ít và có gạch nối</b> (giống \"a five-year-old girl\", \"a two-hour meeting\") → \"<b>five-colour</b> sticky rice\" (xôi ngũ sắc)."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Jane: \"What exactly is a custom, Grandfather?\"",
      prompt: "Grandfather: \"Well, a tradition or custom is something special that is ______ through the generations.\"",
      display: { A: "passed to", B: "passed", C: "passed out", D: "passed down" },
      correct: "D",
      explanation: "\"<b>be passed down</b> through the generations\" là cụm cố định nghĩa là được truyền lại qua các thế hệ. \"passed out\" nghĩa là ngất xỉu / phát cho mọi người — không hợp ngữ cảnh."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Duong: \"We have a tradition of not dumping rubbish during the first three days of Tet.\"",
      prompt: "Whisper: \"______\"",
      display: { A: "Sounds lovely.", B: "You must be kidding!", C: "Spot on.", D: "How interesting!" },
      correct: "D",
      explanation: "\"<b>How interesting!</b>\" là phản ứng tự nhiên khi nghe một thông tin/phong tục lạ và thú vị. \"Spot on\" dùng để khen ai đó nói/đoán chính xác, không hợp khi chỉ đơn thuần nghe kể một sự thật."
    },
    { id: 13, section: "I", type: "mcq",
      context: "John: \"I really want to learn about the history of traditional village festivals.\"",
      prompt: "Ba: \"You should read this book. It gives an ______ review of our customs.\"",
      display: { A: "unique", B: "impolite", C: "informative", D: "obligatory" },
      correct: "C",
      explanation: "\"an <b>informative</b> review\" (một bài tổng quan giàu thông tin, bổ ích) rất hợp với việc \"học về lịch sử các lễ hội\". \"unique\" (độc đáo) không sai về ngữ pháp nhưng không sát nghĩa bằng \"informative\" khi nói về việc cung cấp kiến thức."
    },
    { id: 14, section: "I", type: "mcq",
      context: "David: \"______\"",
      prompt: "Liam: \"You had better not point at others while talking because it is impolite.\"",
      display: {
        A: "What should I avoid doing when communicating with local people?",
        B: "Is it good to talk loudly at the dinner table?",
        C: "Why are the villagers pointing at the bamboo pole?",
        D: "How do Vietnamese people express their gratitude?"
      },
      correct: "A",
      explanation: "Câu trả lời của Liam nói về điều <b>nên tránh làm</b> (không nên chỉ tay vào người khác) khi giao tiếp → câu hỏi phù hợp nhất là hỏi về điều cần tránh khi giao tiếp với người bản địa, đáp án A."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signRemoveShoes",
      prompt: "What does this notice tell you to do?",
      display: {
        A: "You should wear your shoes tightly before you enter.",
        B: "You can leave your shoes anywhere outside the door.",
        C: "You must buy new shoes before entering this house.",
        D: "It is required that you take off your shoes before going inside."
      },
      correct: "D",
      explanation: "Biển báo ghi \"PLEASE REMOVE YOUR SHOES\" (Vui lòng cởi giày) — nghĩa là bắt buộc phải cởi giày trước khi vào nhà → đáp án D."
    },
    { id: 16, section: "II", type: "mcq", image: "signNoDumping",
      prompt: "What does this sign mean?",
      display: {
        A: "You can throw trash here after the first three days of Tet.",
        B: "Rubbish will be collected every hour during the holiday.",
        C: "People are encouraged to clean this area during Tet.",
        D: "You are not allowed to dump garbage at this spot during Tet."
      },
      correct: "D",
      explanation: "Biển \"SAFETY FIRST — NO DUMPING\" cấm đổ rác tại khu vực này, phù hợp với phong tục không đổ rác trong ba ngày đầu năm mới được nhắc ở câu 12 → đáp án D."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "tetFoodCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "with", B: "from", C: "of", D: "by" },
      correct: "B",
      explanation: "\"be made <b>from</b> + nguyên liệu\" dùng khi nguyên liệu bị biến đổi hoàn toàn về hình dạng/bản chất khi tạo ra sản phẩm (gạo nếp, thịt, đậu xanh trộn và gói lại thành bánh) → \"made from sticky rice, pork, green beans...\"."
    },
    { id: 18, section: "III", type: "mcq", passage: "tetFoodCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "in spite of", B: "even though", C: "despite", D: "because" },
      correct: "B",
      explanation: "Theo sau chỗ trống là một <b>mệnh đề</b> (\"the weather is often humid...\") nên cần liên từ đi với mệnh đề là <b>even though</b>. \"in spite of / despite\" phải theo sau bởi cụm danh từ, không phải mệnh đề."
    },
    { id: 19, section: "III", type: "mcq", passage: "tetFoodCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "clear", B: "significant", C: "heavy", D: "available" },
      correct: "B",
      explanation: "\"<b>significant</b> foods that cannot be missed\" (những món ăn quan trọng không thể thiếu) phù hợp với ý nghĩa thờ cúng tổ tiên được nhắc ngay sau đó."
    },
    { id: 20, section: "III", type: "mcq", passage: "tetFoodCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "customers", B: "helpers", C: "suppliers", D: "guests" },
      correct: "C",
      explanation: "\"buy them from famous <b>suppliers</b>\" (mua từ những nhà cung cấp nổi tiếng) — vì chủ ngữ của \"buy from\" phải là người BÁN/cung cấp hàng, không phải \"customers\" (khách mua)."
    },
    { id: 21, section: "III", type: "mcq", passage: "tetFoodCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "after", B: "until", C: "before", D: "while" },
      correct: "A",
      explanation: "\"served immediately <b>after</b> they are cooked\" (được dùng ngay sau khi nấu xong) — logic thời gian: nấu xong rồi mới phục vụ ngay."
    },
    { id: 22, section: "III", type: "mcq", passage: "tetFoodCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "hardly", B: "rarely", C: "often", D: "completely" },
      correct: "C",
      explanation: "Sticky rice và spring rolls \"dễ chuẩn bị hơn\" (easier to prepare) nên chúng \"thường\" (<b>often</b>) được làm tại nhà — trái ngược với sausages (khó làm, phải mua từ nhà cung cấp)."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "giftGivingReading",
      prompt: "Giving small gifts on special occasions is a traditional way to show respect or gratitude in Vietnam.",
      correct: "True",
      explanation: "Đúng. Bài đọc nói: \"it is common in Viet Nam to exchange small gifts on certain occasions... to express respect, love, appreciation, or gratitude\"."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "giftGivingReading",
      prompt: "Company gifts should be presented to the employees before the business meeting begins.",
      correct: "False",
      explanation: "Sai. Bài đọc nói phải tặng quà cho cả công ty \"<b>after</b> the business meeting\" (SAU cuộc họp), không phải trước."
    },
    { id: 25, section: "IV", type: "truefalse", passage: "giftGivingReading",
      prompt: "Wrapping a gift in black paper is considered bad luck in Vietnamese culture.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Do not wrap a gift in black paper because this color is unlucky and associated with funerals in Viet Nam\"."
    },
    { id: 26, section: "IV", type: "truefalse", passage: "giftGivingReading",
      prompt: "Vietnamese people always open their gifts immediately right after receiving them.",
      correct: "False",
      explanation: "Sai. Bài đọc nói người Việt \"may or may not open these gifts when they are received\" — không phải LÚC NÀO cũng mở ngay."
    },
    { id: 27, section: "IV", type: "mcq", passage: "giftGivingReading",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "Cultural guidelines and customs regarding gift-giving in Vietnam.",
        B: "The negative impacts of bribery and corruption in Vietnamese business.",
        C: "A list of items that people should buy when visiting a Vietnamese family.",
        D: "The history of interpersonal relationships and traditional festivals in Vietnam."
      },
      correct: "A",
      explanation: "Cả bài xoay quanh những quy tắc/lưu ý văn hoá khi tặng quà ở Việt Nam (khi nào tặng, tránh màu gì, tránh vật gì, cách nhận quà) → đáp án A khái quát đúng nhất."
    },
    { id: 28, section: "IV", type: "mcq", passage: "giftGivingReading",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "You only need to say thank you if you really like the gift you are given.",
        B: "Sharp objects like knives or scissors should not be chosen as gifts.",
        C: "Gift-giving is an essential part of maintaining personal relationships in Vietnam.",
        D: "You must follow your host's choice on whether to open a received gift immediately."
      },
      correct: "A",
      explanation: "Bài đọc nói \"profuse thanks are always appropriate\" (LUÔN LUÔN nên cảm ơn nồng nhiệt, dù bạn thích quà hay không) — nên câu A (chỉ cảm ơn khi thực sự thích quà) là SAI so với bài đọc."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "Tet is the biggest and most exciting ______________ festival in Vietnam.",
      wordGiven: "celebrate", accepted: ["celebratory"], correct: "celebratory",
      explanation: "Cần một <b>tính từ</b> đứng trước danh từ \"festival\". <b>celebrate</b> (v) → <b>celebratory</b> (adj, +tory): mang tính lễ hội, ăn mừng."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "To prepare for Tet, people make many ______________ and tasty foods.",
      wordGiven: "tradition", accepted: ["traditional"], correct: "traditional",
      explanation: "Cần tính từ đứng trước danh từ \"foods\", song song với tính từ \"tasty\". <b>tradition</b> (n) → <b>traditional</b> (adj, +al): mang tính truyền thống."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The ______________ of the heavy Chung cakes takes a lot of time and effort.",
      wordGiven: "prepare", accepted: ["preparation"], correct: "preparation",
      explanation: "Cần một <b>danh từ số ít</b> làm chủ ngữ (đi với động từ số ít \"takes\"). <b>prepare</b> (v) → <b>preparation</b> (n, +tion): sự chuẩn bị."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "Sticky rice and spring rolls are ______________ served immediately after being cooked.",
      wordGiven: "normal", accepted: ["normally"], correct: "normally",
      explanation: "Cần <b>trạng từ</b> bổ nghĩa cho động từ bị động \"are served\". <b>normal</b> (adj) → <b>normally</b> (adv, +ly): thông thường."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "It is obligatory for us to finish all the tasks before Thursday to meet the ______________.",
      wordGiven: "line", accepted: ["deadline"], correct: "deadline",
      explanation: "\"meet the <b>deadline</b>\" (kịp thời hạn chót) là cụm cố định. <b>line</b> (n) + tiền tố <b>dead-</b> → <b>deadline</b> (n): hạn chót."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "My sister is a very ______________ girl; she always respects local customs.",
      wordGiven: "manner", accepted: ["mannerly"], correct: "mannerly",
      explanation: "Cần tính từ đứng sau \"very\" để bổ nghĩa cho \"girl\". <b>manner</b> (n) → <b>mannerly</b> (adj, +ly): lễ phép, biết cách cư xử — phù hợp với vế sau \"luôn tôn trọng phong tục địa phương\"."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "ceremonyEntry",
      prompt: "Parents took many photos during the ____________________ as their children received their diplomas.",
      accepted: ["graduation ceremony"], correct: "graduation ceremony",
      explanation: "Từ điển cho ví dụ \"They held a <b>graduation ceremony</b> for the university students.\" — \"graduation ceremony\" (lễ tốt nghiệp) rất khớp với ngữ cảnh \"nhận bằng tốt nghiệp\"."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "ceremonyEntry",
      prompt: "The couple decided that their ____________________ would be small and private, with only close family attending.",
      accepted: ["wedding ceremony"], correct: "wedding ceremony",
      explanation: "Từ điển cho ví dụ \"The <b>wedding ceremony</b> was held in an old church.\" — \"wedding ceremony\" (lễ cưới) khớp với ngữ cảnh \"couple\" (cặp đôi) tổ chức nhỏ, riêng tư."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "You shouldn't point at others while talking because it is impolite.",
      starter: "You had better",
      accepted: ["you had better not point at others while talking because it is impolite"],
      correct: "You had better not point at others while talking because it is impolite.",
      explanation: "\"shouldn't + V\" (không nên làm gì) có thể chuyển thành \"<b>had better not + V</b>\" (tốt hơn hết là không nên làm gì) — cùng mang nghĩa khuyên bảo/cảnh báo.<br>→ <i>You had better not point at others while talking because it is impolite.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "We must finish all the homework by Thursday to meet the deadline.",
      starter: "It is obligatory",
      accepted: ["it is obligatory for us to finish all the homework by thursday to meet the deadline"],
      correct: "It is obligatory for us to finish all the homework by Thursday to meet the deadline.",
      explanation: "\"S + must + V\" (phải làm gì) có thể chuyển thành \"<b>It is obligatory for + O + to V</b>\" (bắt buộc đối với ai đó phải làm gì) — cùng diễn tả sự bắt buộc.<br>→ <i>It is obligatory for us to finish all the homework by Thursday to meet the deadline.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "It is a custom for Vietnamese people to take off their shoes before entering a house.",
      starter: "Vietnamese people traditionally",
      accepted: ["vietnamese people traditionally take off their shoes before entering a house"],
      correct: "Vietnamese people traditionally take off their shoes before entering a house.",
      explanation: "\"It is a custom for sb to V\" (đó là phong tục của ai để làm gì) có thể chuyển thành \"<b>sb + traditionally + V</b>\" (ai đó theo truyền thống làm gì) — giữ nguyên nghĩa về một phong tục lâu đời.<br>→ <i>Vietnamese people traditionally take off their shoes before entering a house.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "New year wishes are exchanged during Tet holiday.",
      starter: "People",
      accepted: ["people exchange new year wishes during tet holiday"],
      correct: "People exchange new year wishes during Tet holiday.",
      explanation: "Chuyển câu <b>bị động</b> (are exchanged) sang câu <b>chủ động</b> (exchange), với chủ ngữ chung chung \"People\" thay cho tác nhân không được nêu rõ trong câu gốc.<br>→ <i>People exchange new year wishes during Tet holiday.</i>"
    }
  ]
};
