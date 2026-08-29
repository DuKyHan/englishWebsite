const TEST = {
  id: "test02",
  grade: "Grade 8 — Global Success",
  unit: "Unit 4: Ethnic groups of Viet Nam",
  title: "Grade 8 · Unit 4: Ethnic groups of Viet Nam · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test02.html",
  instructions: [
    "Bài kiểm tra gồm 40 câu, chia thành 7 phần (I → VII), tổng 10 điểm.",
    "Bấm chọn đáp án A/B/C/D cho câu trắc nghiệm, hoặc gõ câu trả lời vào ô trống cho câu điền từ / viết lại câu.",
    "Em có thể dùng nút Previous / Next hoặc bấm số câu ở bảng điều hướng để di chuyển giữa các câu.",
    "Khi hết giờ, bài làm sẽ tự động được nộp.",
    "Sau khi nộp bài, em sẽ thấy điểm số, đáp án đúng và giải thích chi tiết cho từng câu."
  ],
  sections: [
    { id: "I",   title: "Choose the word / phrase / sentence (A, B, C or D) that best fits the space or best answers the question given in each sentence.", points: "3.5 pts", range: [1,14] },
    { id: "II",  title: "Look at the sign or the notice. Choose the best answer (A, B, C or D).", points: "0.5 pt", range: [15,16] },
    { id: "III", title: "Choose the word (A, B, C or D) that best fits each space in the following passage.", points: "1.5 pts", range: [17,22] },
    { id: "IV",  title: "Read the passage. Decide True/False (23–26) and choose the best answer (27–28).", points: "1.5 pts", range: [23,28] },
    { id: "V",   title: "Use the correct form of the word given in each sentence.", points: "1.5 pts", range: [29,34] },
    { id: "VI",  title: "Look at the dictionary entry of “minority”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35,36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37,40] }
  ],
  passages: {
    cloze1: `The Rong House can only be found in villages to the north of the Central Highlands, especially in Gia Lai and Kon Tum provinces. It is a large, imposing, beautifully (17) ______ stilt house built in the middle of the village. It is where community activities take place, such as meetings, wedding ceremonies, or praying ceremonies. It is also the place for the reception of guests.<br><br>The Rong House of each ethnic group has its own architectural style, design, and decor. Yet there are shared (18) ______. In the village, it is often the biggest house roofed with yellow-dried thatch leaves and having 8 big wood columns. The rafters are decorated with patterns of bright colors, depicting religious scenes, legendary stories about ancient heroes, stylized animals, and other familiar things of village life. The most distinctive feature of the decor of the Rong House is the (19) ______ of the brilliant God of Sun. The Rong House is a symbol of the culture of Central Highlanders, an age-old and stable culture. The bigger the house, the wealthier the village is. It is a source of great (20) ______ for the whole village.<br><br>Among ethnic minorities in Viet Nam, the largest ones are the Tay, Thai, Muong, Hoa, Khmer, and Nung, (21) ______ the smallest are the Brau, Rơ-măm, and Odu. Each group has its own culture, which contributes to the incredible cultural (22) ______ of Viet Nam.`,
    reading1: `Bamboo is engraved in Vietnamese culture and daily life, providing protection, and representing resiliency. Bamboo can be manipulated in any shape or form to assist in the simplest or most complex of functions. Here in Viet Nam, and especially in the countryside, bamboo is used for everything — from chopsticks, to chairs, to agricultural tools, to roofs, to instruments and to home decorations.<br><br>Bamboo is embedded even in Vietnamese dance culture! A series of bamboo sticks are set up in a line, with people holding them in place on either side. Dancers move in and out of the bamboo sticks, trying to time their dancing so as not to get caught between the bamboo sticks. Performers typically dance hand in hand, slowly making their way sideways along the bamboo line and even the best of dancers always tend to get stuck a few times, resulting in bunches of giggles and loads of smiles.`,
    minorityEntry: {
      word: "minority", ipa: "/maɪˈnɒrəti/", pos: "noun",
      def: "1. the smaller part of a group; less than half of a total number &nbsp;&nbsp; 2. a group of people who are different from the larger group in a country, because of their race, religion, etc.",
      examples: [
        "Only <b>a small minority</b> of students voted against the new school uniform.",
        "Local residents are <b>in the minority</b> regarding the decision to build a new mall.",
        "The government is working to protect the rights of <b>ethnic minorities</b>.",
        "She belongs to <b>a religious minority</b> in her hometown."
      ]
    }
  },
  images: {
    signSlowSchool: "assets/images/sign_slow_school.jpg",
    signNewSchedule: "assets/images/sign_new_schedule.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "<u>a</u>ncestor", B: "<u>a</u>nimal", C: "<u>ba</u>sic", D: "g<u>a</u>ther" },
      correct: "C",
      explanation: "Trong <b>ancestor</b> /ˈænsestər/, <b>animal</b> /ˈænɪməl/, <b>gather</b> /ˈɡæðər/, chữ <i>a</i> được đọc là /æ/. Riêng <b>basic</b> /ˈbeɪsɪk/ có <i>a</i> đọc là /eɪ/. → Đáp án <b>C. basic</b> là từ phát âm khác."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "other<u>s</u>", B: "people<u>s</u>", C: "instrument<u>s</u>", D: "field<u>s</u>" },
      correct: "C",
      explanation: "Đuôi <b>-s</b> đọc là /z/ sau âm hữu thanh: other<b>s</b> /ðəz/, people<b>s</b> /piːplz/, field<b>s</b> /fiːldz/. Riêng instrument<b>s</b> đọc là /s/ vì đứng sau âm vô thanh /t/. → Đáp án <b>C. instruments</b> là từ phát âm khác."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "feature", B: "costume", C: "market", D: "bamboo" },
      correct: "D",
      explanation: "<b>FEA</b>ture, <b>COS</b>tume, <b>MAR</b>ket đều có trọng âm rơi vào âm tiết 1. Riêng <b>bamBOO</b> /bæmˈbuː/ trọng âm rơi vào âm tiết 2. → Đáp án <b>D. bamboo</b> có trọng âm khác."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "ancestor", B: "festival", C: "heritage", D: "museum" },
      correct: "D",
      explanation: "<b>AN</b>cestor, <b>FES</b>tival, <b>HER</b>itage đều có trọng âm rơi vào âm tiết 1. Riêng <b>muSEum</b> /mjuːˈziːəm/ trọng âm rơi vào âm tiết 2. → Đáp án <b>D. museum</b> có trọng âm khác."
    },
    { id: 5, section: "I", type: "mcq",
      context: `<b>Tom:</b> Look at those fields! Is rice the main agricultural crop here?<br><b>Lan:</b> Yes. For Vietnamese people living in the countryside, it ______ the staple food.`,
      prompt: "Choose the best answer.",
      display: { A: "is providing", B: "provides", C: "has provided", D: "provided" },
      correct: "B",
      explanation: "Câu nói về một sự thật hiển nhiên, luôn đúng (rice = staple food of Vietnamese people) → dùng <b>thì hiện tại đơn</b>: S (số ít, ngôi thứ 3) + V-s/es → <b>provides</b>."
    },
    { id: 6, section: "I", type: "mcq",
      context: `<b>Phong:</b> Where does the Hung Temple Festival take place?<br><b>Nam:</b> It is held ______ Phu Tho province every year.`,
      prompt: "Choose the best answer.",
      display: { A: "in", B: "on", C: "under", D: "at" },
      correct: "A",
      explanation: "Dùng giới từ <b>in</b> trước tên một tỉnh/vùng đất rộng (in Phu Tho province). \"on\" dùng cho bề mặt/tên đường; \"at\" dùng cho địa điểm cụ thể, nhỏ."
    },
    { id: 7, section: "I", type: "mcq",
      context: `<b>Nick:</b> How often do the ethnic groups hold this special festival?<br><b>Mary:</b> ______ month, as far as I know.`,
      prompt: "Choose the best answer.",
      display: { A: "Many", B: "All", C: "Each of", D: "Every" },
      correct: "D",
      explanation: "\"<b>Every</b> + danh từ số ít\" = mỗi... (Every month = mỗi tháng), diễn tả tần suất — phù hợp với câu hỏi \"How often...?\". \"Each of\" phải đi với danh từ số nhiều có \"the/these\" (each of the months); \"All\"/\"Many\" cũng cần danh từ số nhiều."
    },
    { id: 8, section: "I", type: "mcq",
      context: `<b>Elena:</b> What do the cattle provide the nomads ______?<br><b>Mi:</b> Mainly dairy products, meat, and clothing.`,
      prompt: "Choose the best answer.",
      display: { A: "for", B: "with", C: "of", D: "to" },
      correct: "B",
      explanation: "Cụm động từ cố định: <b>provide someone with something</b> = cung cấp cho ai cái gì. → \"provide the nomads with dairy products...\"."
    },
    { id: 9, section: "I", type: "mcq",
      context: `<b>John:</b> Do you know the reason ______ Hung Temple Festival is so famous?<br><b>An:</b> Yes, it honors the sacred ancestors of all Vietnamese people.`,
      prompt: "Choose the best answer.",
      display: { A: "where", B: "why", C: "what", D: "when" },
      correct: "B",
      explanation: "Sau danh từ \"reason\" (lý do), ta dùng đại từ quan hệ <b>why</b> để giải thích nguyên nhân: \"the reason why + mệnh đề\"."
    },
    { id: 10, section: "I", type: "mcq",
      context: `<b>Mark:</b> Look at the majestic Rong house! It's a great ______ of the Central Highlanders.<br><b>Bao:</b> Yes, it represents their age-old and stable culture.`,
      prompt: "Choose the best answer.",
      display: { A: "symbol", B: "sign", C: "signal", D: "scene" },
      correct: "A",
      explanation: "<b>symbol</b> (n) = biểu tượng, vật đại diện cho một nền văn hoá. Câu sau \"it represents...\" (nó đại diện cho...) xác nhận nghĩa \"biểu tượng\"."
    },
    { id: 11, section: "I", type: "mcq",
      context: `<b>Tom:</b> The Gong culture considers the instrument a connection between men and the supernatural.<br><b>Jane:</b> Exactly. ______ space of Gong culture in Viet Nam is recognized by UNESCO.`,
      prompt: "Choose the best answer.",
      display: { A: "X (No article)", B: "The", C: "A", D: "An" },
      correct: "B",
      explanation: "\"<b>The</b> Space of Gong Culture (in the Central Highlands of Viet Nam)\" là tên gọi chính thức, duy nhất của di sản văn hoá phi vật thể được UNESCO công nhận → dùng mạo từ xác định <b>the</b> vì đây là một thực thể cụ thể, duy nhất mà cả hai người đang nói đều biết."
    },
    { id: 12, section: "I", type: "mcq",
      context: `<b>Hoa:</b> How are the changes in ancient Vietnamese culture explained?<br><b>David:</b> Most of them are passed down ______ myths and folktales.`,
      prompt: "Choose the best answer.",
      display: { A: "at", B: "over", C: "with", D: "through" },
      correct: "D",
      explanation: "\"passed down <b>through</b> + phương tiện\" = được truyền lại qua/thông qua (một phương thức nào đó) — \"through myths and folktales\" = qua các huyền thoại và truyện dân gian."
    },
    { id: 13, section: "I", type: "mcq",
      context: `<b>Mike:</b> I've just won the first prize in the quiz about ethnic minorities!<br><b>Nick:</b> ______`,
      prompt: "Choose the best answer.",
      display: { A: "That's a good idea.", B: "Not at all.", C: "Yes, we do.", D: "Congratulations! That's awesome!" },
      correct: "D",
      explanation: "Khi ai đó chia sẻ tin vui/thành tích, ta chúc mừng họ: <b>\"Congratulations! That's awesome!\"</b>. Các đáp án khác không phù hợp ngữ cảnh chúc mừng."
    },
    { id: 14, section: "I", type: "mcq",
      context: `<b>Tourist:</b> Could you tell me what special food is eaten during their festivals?<br><b>Tour guide:</b> ______`,
      prompt: "Choose the best answer.",
      display: {
        A: "Traditional houses are built near the river.",
        B: "Festivals are held every month.",
        C: "Mainly five-colored sticky rice and grilled meat.",
        D: "Visitors are allowed to take photos there."
      },
      correct: "C",
      explanation: "Câu hỏi hỏi về <i>món ăn đặc biệt</i> (what special food), nên câu trả lời phải nêu tên món ăn: <b>\"Mainly five-colored sticky rice and grilled meat.\"</b> Các đáp án khác nói về nhà ở, tần suất lễ hội, việc chụp ảnh — không trả lời đúng câu hỏi."
    },

    // ---------------- SECTION II (15-16) ----------------
    { id: 15, section: "II", type: "mcq",
      image: "signSlowSchool",
      prompt: "What does this sign tell you?",
      display: {
        A: "Drivers must slow down because school children are ahead.",
        B: "You can drive as fast as you want here.",
        C: "You should look for a parking lot near the school.",
        D: "High-speed vehicles are permitted on this road."
      },
      correct: "A",
      explanation: "Biển báo ghi \"SLOW — SCHOOL ZONE\" (Đi chậm — Khu vực trường học) → yêu cầu người lái xe phải giảm tốc độ vì có học sinh phía trước, đáp án A."
    },
    { id: 16, section: "II", type: "mcq",
      image: "signNewSchedule",
      prompt: "What does this notice tell students?",
      display: {
        A: "The new schedule for the virtual tour cannot be changed.",
        B: "The updated schedule will be ready for viewing tomorrow.",
        C: "The virtual tour is canceled until next week.",
        D: "Students can join the virtual tour this afternoon."
      },
      correct: "B",
      explanation: "Thông báo ghi \"NEW SCHEDULE FOR VIRTUAL (TOUR) AVAILABLE TOMORROW\" (Lịch trình mới cho chuyến tham quan ảo sẽ có vào ngày mai) → lịch mới sẽ sẵn sàng để xem vào ngày mai, đáp án B."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "cloze1", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "decorating", B: "decorate", C: "decorated", D: "decorative" }, correct: "C",
      explanation: "Cần một tính từ/quá khứ phân từ đứng sau trạng từ \"beautifully\" và trước danh từ \"stilt house\", mang nghĩa bị động (ngôi nhà ĐƯỢC trang trí đẹp) → <b>decorated</b> (v-ed dùng như tính từ, nghĩa bị động: được trang trí)."
    },
    { id: 18, section: "III", type: "mcq", passage: "cloze1", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "customs", B: "designs", C: "cultures", D: "features" }, correct: "D",
      explanation: "\"there are shared <b>features</b>\" = có những đặc điểm chung — câu sau đó liệt kê các đặc điểm chung về kiến trúc (mái tranh, 8 cột gỗ...), nên \"features\" (đặc điểm) là từ phù hợp nhất."
    },
    { id: 19, section: "III", type: "mcq", passage: "cloze1", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "portrait", B: "image", C: "photo", D: "painting" }, correct: "B",
      explanation: "\"the <b>image</b> of the brilliant God of Sun\" = hình ảnh (mang tính biểu tượng, trang trí) của thần Mặt Trời. \"image\" là từ chung nhất để chỉ một hình ảnh/biểu tượng trang trí, phù hợp hơn \"photo\" (ảnh chụp) hay \"portrait\" (chân dung người)."
    },
    { id: 20, section: "III", type: "mcq", passage: "cloze1", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "proud", B: "proudness", C: "pride", D: "proudly" }, correct: "C",
      explanation: "Cần danh từ sau \"great\" và \"of\": \"a source of great <b>pride</b>\" = một nguồn tự hào lớn. proud (adj) → <b>pride</b> (n, không theo quy tắc thêm hậu tố mà đổi hẳn dạng từ)."
    },
    { id: 21, section: "III", type: "mcq", passage: "cloze1", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "so", B: "despite", C: "while", D: "because" }, correct: "C",
      explanation: "Hai vế câu đối lập nhau (nhóm lớn nhất >< nhóm nhỏ nhất) → dùng liên từ <b>while</b> (trong khi) để so sánh/đối lập hai ý."
    },
    { id: 22, section: "III", type: "mcq", passage: "cloze1", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "division", B: "similarity", C: "restriction", D: "diversity" }, correct: "D",
      explanation: "\"contributes to the incredible cultural <b>diversity</b> of Viet Nam\" = góp phần vào sự đa dạng văn hoá đáng kinh ngạc của Việt Nam. Mỗi dân tộc có văn hoá riêng → góp phần tạo nên sự ĐA DẠNG, không phải sự chia rẽ (division) hay giống nhau (similarity)."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "reading1",
      prompt: "Bamboo is only used to make simple things in Viet Nam.",
      correct: "False",
      explanation: "Sai. Bài đọc nói bamboo \"can be manipulated in any shape or form to assist in the simplest OR MOST COMPLEX of functions\" — tức là dùng được cho cả việc đơn giản lẫn phức tạp, không chỉ đơn giản."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "reading1",
      prompt: "In the traditional dance, people hold bamboo sticks on both sides of a line.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"people holding them (bamboo sticks) in place on either side\" = giữ gậy tre ở cả hai bên."
    },
    { id: 25, section: "IV", type: "truefalse", passage: "reading1",
      prompt: "Experienced dancers never get stuck between the bamboo sticks.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"even the best of dancers always tend to get stuck a few times\" — ngay cả những vũ công giỏi nhất cũng thường xuyên bị kẹt."
    },
    { id: 26, section: "IV", type: "truefalse", passage: "reading1",
      prompt: "Bamboo represents the ability to recover quickly from difficulties.",
      correct: "True",
      explanation: "Đúng. Bài đọc: bamboo \"representing resiliency\" — resiliency = khả năng phục hồi nhanh sau khó khăn."
    },
    { id: 27, section: "IV", type: "mcq", passage: "reading1",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "The importance of bamboo in Vietnamese culture, daily life, and traditional dance.",
        B: "The way people in the Vietnamese countryside use bamboo to build their houses.",
        C: "The historical reasons why bamboo became a popular plant in Viet Nam.",
        D: "The rules and steps of a traditional Vietnamese dance using bamboo sticks."
      },
      correct: "A",
      explanation: "Cả bài xoay quanh vai trò của tre trong văn hoá, đời sống hằng ngày và điệu múa truyền thống của người Việt Nam → đáp án A bao quát đầy đủ nhất. B, C, D chỉ là những chi tiết nhỏ."
    },
    { id: 28, section: "IV", type: "mcq", passage: "reading1",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "Dancers usually hold the bamboo sticks while moving sideways.",
        B: "Bamboo can be shaped in many ways to serve different purposes.",
        C: "People use bamboo to make household furniture and musical instruments.",
        D: "Getting stuck during the bamboo dance creates a joyful atmosphere."
      },
      correct: "A",
      explanation: "Bài đọc cho biết CHÍNH NHỮNG NGƯỜI GIỮ GẬY (không phải các vũ công) mới là người \"holding them in place on either side\"; các vũ công (dancers) thì \"move in and out\" và \"dance hand in hand... sideways\" chứ không cầm gậy. → Đáp án A không đúng với bài đọc, được chọn."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "Viet Nam is a country of great cultural ______________ with 54 ethnic groups.",
      wordGiven: "diverse", accepted: ["diversity"], correct: "diversity",
      explanation: "Cần danh từ sau tính từ \"cultural\" → diverse (adj) → <b>diversity</b> (n, +ity)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "The museum collects and preserves many ______________ artifacts of ethnic cultures.",
      wordGiven: "history", accepted: ["historical"], correct: "historical",
      explanation: "Cần tính từ đứng trước danh từ \"artifacts\" → history (n) → <b>historical</b> (adj, +ical)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The Cham people once boasted a ______________ culture early in history.",
      wordGiven: "flourish", accepted: ["flourishing"], correct: "flourishing",
      explanation: "Cần tính từ đứng trước danh từ \"culture\" mang nghĩa chủ động (nền văn hoá đang phát triển mạnh) → flourish (v) → <b>flourishing</b> (adj, dạng V-ing)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "A number of ethnic minorities have ______________ mastered farming techniques.",
      wordGiven: "success", accepted: ["successfully"], correct: "successfully",
      explanation: "Cần trạng từ bổ nghĩa cho động từ \"mastered\" → success (n) → successful (adj) → <b>successfully</b> (adv, +ly)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "The exhibition of traditional costumes was ______________ beautiful.",
      wordGiven: "impress", accepted: ["impressively"], correct: "impressively",
      explanation: "Cần trạng từ bổ nghĩa cho tính từ \"beautiful\" (đẹp một cách ấn tượng) → impress (v) → impressive (adj) → <b>impressively</b> (adv, +ly)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "The local authorities are trying to prevent the ______________ of traditional crafts.",
      wordGiven: "appear", accepted: ["disappearance"], correct: "disappearance",
      explanation: "Cần danh từ làm tân ngữ của \"prevent\" → appear (v) → disappear (v, thêm tiền tố dis- mang nghĩa phủ định: biến mất) → <b>disappearance</b> (n, +ance)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "minorityEntry",
      prompt: "The festival celebrates the traditional music and dance of various ____________________ in the region.",
      accepted: ["ethnic minorities"], correct: "ethnic minorities",
      explanation: "Từ điển cho ví dụ \"The government is working to protect the rights of <b>ethnic minorities</b>.\" — \"ethnic minorities\" (các dân tộc thiểu số) rất phù hợp với ngữ cảnh lễ hội tôn vinh nhiều nền văn hoá dân tộc khác nhau."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "minorityEntry",
      prompt: "The survey showed that only ____________________ of people prefer working from home full-time.",
      accepted: ["a small minority", "a minority"], correct: "a small minority",
      explanation: "Từ điển cho ví dụ \"Only <b>a small minority</b> of students voted against...\" — nghĩa 1 của \"minority\" là \"phần nhỏ hơn của một nhóm\", rất khớp với \"only ___ of people prefer...\" (chỉ một số ít người thích...)."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "How long have you been an ethnologist?",
      starter: "When did you",
      accepted: [
        "when did you start working as an ethnologist",
        "when did you become an ethnologist"
      ],
      correct: "When did you start working as an ethnologist? / When did you become an ethnologist?",
      explanation: "Câu hỏi \"How long have you been + N?\" (thì hiện tại hoàn thành, hỏi về khoảng thời gian) có thể chuyển thành câu hỏi về ĐIỂM THỜI GIAN bắt đầu bằng \"When did you start/become...?\" (thì quá khứ đơn) — cả hai câu đều hỏi về cùng một khoảng thời gian làm việc, chỉ khác cách hỏi (khoảng thời gian ↔ thời điểm bắt đầu)."
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "Who does this beautiful traditional costume belong to?",
      starter: "Whose is",
      accepted: ["whose is this beautiful traditional costume"],
      correct: "Whose is this beautiful traditional costume?",
      explanation: "\"Who does + N + belong to?\" (N thuộc về ai?) có nghĩa tương đương với \"Whose is + N?\" (N là của ai?). Đây là hai cách hỏi khác nhau về CHỦ SỞ HỮU của cùng một vật."
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "Many ethnic groups live in remote areas of Viet Nam.",
      starter: "Remote areas of Viet Nam are",
      accepted: [
        "remote areas of viet nam are where many ethnic groups live",
        "remote areas of viet nam are inhabited by many ethnic groups"
      ],
      correct: "Remote areas of Viet Nam are where many ethnic groups live. / Remote areas of Viet Nam are inhabited by many ethnic groups.",
      explanation: "Đổi chủ ngữ từ \"many ethnic groups\" (chủ động) sang \"Remote areas of Viet Nam\" (làm chủ ngữ mới): dùng mệnh đề quan hệ \"...are where + S + V\" hoặc câu bị động \"...are inhabited by + O\" (inhabited by = được cư trú bởi)."
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "It is a long time since they last attended a festival in the Central Highlands.",
      starter: "They haven't",
      accepted: ["they havent attended a festival in the central highlands for a long time"],
      correct: "They haven't attended a festival in the Central Highlands for a long time.",
      explanation: "Cấu trúc: <b>It is + khoảng thời gian + since + S + last + V(quá khứ)</b> ⇔ <b>S + haven't/hasn't + V(p.p) + for + khoảng thời gian</b>. Cả hai đều diễn tả việc lâu rồi chưa xảy ra lại."
    }
  ]
};
