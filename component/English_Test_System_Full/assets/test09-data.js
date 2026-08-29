const TEST = {
  id: "test09",
  grade: "Grade 8 — Global Success",
  unit: "Unit 2: Life in the countryside",
  title: "Grade 8 · Unit 2: Life in the countryside · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test09.html",
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
    { id: "VI", title: "Look at the dictionary entry of “picturesque”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    hobbyCloze: "There are many reasons why it is important to have a hobby. A hobby is a regular activity that is done for enjoyment, typically during one's (17) ________ time. It will give you pleasure and help you relax after long hours of hard work. For example, many old people enjoy gardening. They grow a lot of trees and vegetables, so they can even sell them for some money.<br><br>In addition, a hobby can help you (18) ________ with other people. If you like (19) ________ stamps, you can join a stamp club to share your albums with other collectors. If your hobby is carving eggshells, you can give your beautiful products to your friends (20) ________ unique gifts. In this busy daily schedule, we all get so caught up in our routines that we sometimes forget to give out time for ourselves. Indulging in a hobby is actually good for a sound health. It provides us with a time of leisure where we can do something that brings us immense (21) ________. Therefore, everyone (22) ________ have at least one hobby to balance their life.",
    countryLifeReading: "Living in the country is something that people from the city often dream about. However, in reality, it has both advantages and disadvantages. There are certainly many advantages to living in the country. First, you can enjoy peace and quietness. Moreover, people tend to be friendlier. A further advantage is that there is less traffic, so it is safer for young children. However, there are certain disadvantages or drawbacks to life outside the city. First, because there are fewer people, you are likely to have few friends. In addition, entertainment is difficult to find, particularly in the evening. Furthermore, the fact that there are fewer shops and services means that it is hard to find jobs. In short, it can be seen that the country is more suitable for some people than others. On the whole, it is often the best for those who are retired or who have young children. In contrast, young people who have a career are better provided in the city.",
    picturesqueEntry: {
      word: "picturesque", ipa: "/ˌpɪktʃərˈesk/", pos: "adjective",
      def: "(of a place, building, or scene) attractive in a pretty, old-fashioned way.",
      examples: [
        "The town is famous for its <b>picturesque streets</b> lined with colorful flowers.",
        "We decided to take a <b>picturesque route</b> through the mountains instead of the highway.",
        "The guide showed us a <b>picturesque village</b> nestled in the valley.",
        "They stayed in a <b>picturesque cottage</b> by the lake during their summer holiday."
      ]
    }
  },
  images: {
    signKembleStation: "assets/images/sign_kemble_station.jpg",
    signAuthorizedStaff: "assets/images/sign_authorized_staff.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "fruit", B: "suitable", C: "juice", D: "building" },
      correct: "D",
      explanation: "\"ui\" trong \"fruit\" /fruːt/, \"suitable\" /ˈsuːtəbl/, \"juice\" /dʒuːs/ đều phát âm là <b>/uː/</b>. Riêng \"building\" /ˈbɪldɪŋ/ có \"ui\" phát âm là <b>/ɪ/</b> → khác biệt, đáp án D."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "marriage", B: "cottage", C: "village", D: "massage" },
      correct: "D",
      explanation: "\"age\" trong \"marriage\" /ˈmærɪdʒ/, \"cottage\" /ˈkɒtɪdʒ/, \"village\" /ˈvɪlɪdʒ/ đều phát âm là <b>/ɪdʒ/</b>. Riêng \"massage\" /məˈsɑːʒ/ có \"age\" phát âm là <b>/ɑːʒ/</b> → khác biệt, đáp án D."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "devote", B: "borrow", C: "follow", D: "answer" },
      correct: "A",
      explanation: "\"borrow\" /ˈbɒrəʊ/, \"follow\" /ˈfɒləʊ/, \"answer\" /ˈɑːnsər/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"devote\" /dɪˈvoʊt/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án A."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "hospitable", B: "picturesque", C: "speciality", D: "entertainment" },
      correct: "B",
      explanation: "\"hospitable\" /ˈhɒspɪtəbl/ có trọng âm rơi vào âm tiết 1, \"speciality\" /ˌspeʃiˈæləti/ và \"entertainment\" /ˌentərˈteɪnmənt/ đều có trọng âm rơi vào âm tiết áp cuối. Riêng \"picturesque\" /ˌpɪktʃərˈesk/ có trọng âm rơi vào <b>âm tiết cuối</b> → khác biệt, đáp án B."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"I can't find any modern cookers or washing machines in this village.\"",
      prompt: "Jane: \"Yes. In some rural areas, it's difficult to find ______ in a house.\"",
      display: { A: "electrics appliances", B: "electrical appliances", C: "electricity appliances", D: "electrician appliances" },
      correct: "B",
      explanation: "\"<b>electrical</b> appliances\" (thiết bị điện) là cụm danh từ cố định — cần tính từ \"electrical\" đứng trước danh từ \"appliances\"."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Minh: \"The old man gave us food and a place to stay when we got lost.\"",
      prompt: "Long: \"Wow! The villager's ______ saved you from starving.\"",
      display: { A: "generouosity", B: "generousness", C: "generosy", D: "generosity" },
      correct: "D",
      explanation: "<b>generosity</b> (n) = lòng hào phóng — là dạng danh từ đúng chính tả của \"generous\" (hào phóng)."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Anna: \"Why do these tribes move to a new place every few months?\"",
      prompt: "Ben: \"Because people living a ______ life have to move a lot to find grass for their animals.\"",
      display: { A: "nomadic", B: "stable", C: "commuting", D: "moving" },
      correct: "A",
      explanation: "\"<b>nomadic</b> life\" (cuộc sống du mục) phù hợp với việc phải di chuyển liên tục để tìm cỏ cho vật nuôi."
    },
    { id: 8, section: "I", type: "mcq",
      context: "David: \"What do you plan to do during your summer vacation in Australia?\"",
      prompt: "Nancy: \"______ fruits on a farm is one of the most popular part-time jobs there.\"",
      display: { A: "Doing", B: "Finding", C: "Picking", D: "Taking" },
      correct: "C",
      explanation: "\"<b>pick</b> fruits\" (hái trái cây) là cụm động từ cố định phù hợp với công việc làm thêm ở nông trại."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Elena: \"What do you think about John's plan to build a solar-powered boat?\"",
      prompt: "Chris: \"It seems to be ______ idea so far. Everyone loves it.\"",
      display: { A: "most brilliant", B: "the most brilliant", C: "the more brilliant", D: "more brilliant" },
      correct: "B",
      explanation: "Cần \"<b>the</b> + so sánh nhất\" (the most brilliant) khi nói về một ý tưởng cụ thể, nổi bật nhất trong ngữ cảnh."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Peter: \"Can we walk to your uncle's farm from here?\"",
      prompt: "Mary: \"No, it's too far. His office and farm are ______ away than mine.\"",
      display: { A: "farther", B: "father", C: "farer", D: "more far" },
      correct: "A",
      explanation: "<b>farther</b> (adv, so sánh hơn của \"far\" chỉ khoảng cách vật lý) phù hợp với \"away than mine\"."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Nam: \"Did John go alone to his hometown last week?\"",
      prompt: "Lan: \"No, John invited Ann to join his family on ______ to his home village.\"",
      display: { A: "a trip two days", B: "two-days trip", C: "a two-day trip", D: "a two-days trip" },
      correct: "C",
      explanation: "Cụm danh từ ghép chỉ thời gian đứng trước danh từ phải ở dạng số ít có gạch nối: \"<b>a two-day trip</b>\" (một chuyến đi hai ngày)."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Lan: \"What are you doing there?\"",
      prompt: "Nam: \"______! I am repairing the fence and feeding the chickens.\"",
      display: { A: "OK", B: "Good idea", C: "Lots of things", D: "Not at all" },
      correct: "C",
      explanation: "\"<b>Lots of things</b>\" (rất nhiều việc) phù hợp nhất vì câu tiếp theo liệt kê ra nhiều việc đang làm (sửa hàng rào, cho gà ăn)."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Lucas: \"I really want to visit the countryside to enjoy the fresh atmosphere.\"",
      prompt: "Mark: \"______\"",
      display: { A: "Me too! The city is so crowded.", B: "I've no idea.", C: "OK, we do, too.", D: "Not at all." },
      correct: "A",
      explanation: "\"<b>Me too! The city is so crowded.</b>\" thể hiện sự đồng tình và đưa thêm lý do phù hợp với mong muốn về nông thôn của Lucas."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Sophia: \"Why do people cut down so many trees in this area?\"",
      prompt: "Oliver: \"______\"",
      display: {
        A: "Trees are growing too tall in the summer sun.",
        B: "Because they want to go for a two-day trip.",
        C: "Forests are beautiful and very peaceful places.",
        D: "Poor farmers need wood for cooking and warming themselves."
      },
      correct: "D",
      explanation: "\"<b>Poor farmers need wood for cooking and warming themselves.</b>\" là lý do hợp lý nhất giải thích vì sao người ta chặt cây."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signKembleStation",
      prompt: "What does this sign tell you?",
      display: {
        A: "This is a railway station sign for a place called Kemble.",
        B: "This is a sign for a bus stop called Kemble.",
        C: "This sign is giving a warning about road construction in Kemble.",
        D: "This sign shows the way to the Kemble airport."
      },
      correct: "A",
      explanation: "Biển ghi \"KEMBLE STATION\" kèm hình tàu/xe điện → đây là biển ga tàu/nhà ga tên Kemble, đáp án A."
    },
    { id: 16, section: "II", type: "mcq", image: "signAuthorizedStaff",
      prompt: "What does this notice mean?",
      display: {
        A: "Only students who are on the school sports team can enter.",
        B: "Anyone can enter this area as long as they stay quiet.",
        C: "Both students and visitors can access this area freely.",
        D: "Only authorized staff members are allowed to enter this area."
      },
      correct: "D",
      explanation: "Biển ghi \"NOTICE — AUTHORIZED STAFF ONLY BEYOND THIS POINT\" (Chỉ nhân viên được phép qua khu vực này) → đáp án D."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "hobbyCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "busy", B: "free", C: "work", D: "study" },
      correct: "B",
      explanation: "\"during one's <b>free</b> time\" (vào thời gian rảnh) là cụm cố định."
    },
    { id: 18, section: "III", type: "mcq", passage: "hobbyCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "connect", B: "compete", C: "argue", D: "separate" },
      correct: "A",
      explanation: "\"<b>connect</b> with other people\" (kết nối với người khác) phù hợp với lợi ích của việc có sở thích."
    },
    { id: 19, section: "III", type: "mcq", passage: "hobbyCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "playing", B: "selling", C: "doing", D: "collecting" },
      correct: "D",
      explanation: "\"If you like <b>collecting</b> stamps\" (nếu bạn thích sưu tầm tem) khớp với việc \"tham gia câu lạc bộ tem\"."
    },
    { id: 20, section: "III", type: "mcq", passage: "hobbyCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "for", B: "with", C: "as", D: "in" },
      correct: "C",
      explanation: "\"give... to your friends <b>as</b> unique gifts\" (tặng làm quà độc đáo) — \"as\" mang nghĩa \"như là, làm\"."
    },
    { id: 21, section: "III", type: "mcq", passage: "hobbyCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "sadness", B: "happiness", C: "stress", D: "anger" },
      correct: "B",
      explanation: "\"brings us immense <b>happiness</b>\" (mang lại niềm hạnh phúc lớn lao) phù hợp với ý nghĩa tích cực của đoạn văn."
    },
    { id: 22, section: "III", type: "mcq", passage: "hobbyCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "should", B: "can't", C: "needn't", D: "shouldn't" },
      correct: "A",
      explanation: "\"everyone <b>should</b> have at least one hobby\" (mọi người nên có ít nhất một sở thích) — lời khuyên tích cực."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "countryLifeReading",
      prompt: "Country life is considered safer for small children because there is less traffic.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"there is less traffic, so it is safer for young children.\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "countryLifeReading",
      prompt: "It is very easy to find different forms of entertainment in the countryside at night.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"entertainment is difficult to find, particularly in the evening.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "countryLifeReading",
      prompt: "Having fewer shops and services makes it difficult for people to find employment in the country.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"the fact that there are fewer shops and services means that it is hard to find jobs.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "countryLifeReading",
      prompt: "The countryside is the most ideal place for young people who want to develop their careers.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"young people who have a career are better provided in the <b>city</b>\", không phải nông thôn."
    },
    { id: 27, section: "IV", type: "mcq", passage: "countryLifeReading",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "A comparison of the pros and cons of country life and who it suits best.",
        B: "The reasons why city people always dream about living in the countryside.",
        C: "The continuous development of shops and services in rural areas.",
        D: "The difficulties of finding jobs and entertainment for retired people."
      },
      correct: "A",
      explanation: "Bài đọc so sánh ưu và nhược điểm của cuộc sống nông thôn, rồi kết luận nó phù hợp với ai → đáp án A bao quát toàn bài."
    },
    { id: 28, section: "IV", type: "mcq", passage: "countryLifeReading",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "Living in the countryside helps you make more friends because there are fewer people.",
        B: "People in the countryside are generally friendlier than those in the city.",
        C: "Rural areas offer a peaceful and quiet living environment.",
        D: "The city provides better conditions and opportunities for young professionals."
      },
      correct: "A",
      explanation: "Bài đọc nói ngược lại: \"because there are fewer people, you are likely to have <b>few</b> friends\" (ít bạn hơn) — không phải nhiều bạn hơn → câu A SAI."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "Our school is organizing an exciting ______________ trip to Green Valley Farm next Friday.",
      wordGiven: "daily", accepted: ["day"], correct: "day",
      explanation: "Cần danh từ ghép \"<b>day trip</b>\" (chuyến đi trong ngày) — \"daily\" (hằng ngày) được rút gọn thành \"day\" để tạo danh từ ghép với \"trip\"."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "The scenery at the local farm is truly ______________, with green fields and big rivers.",
      wordGiven: "wonder", accepted: ["wonderful"], correct: "wonderful",
      explanation: "Cần tính từ đứng sau \"truly\". <b>wonder</b> (n/v) → <b>wonderful</b> (adj, +ful): tuyệt vời."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "Living in the country brings a lot of ______________ because the environment is quiet and peaceful.",
      wordGiven: "happy", accepted: ["happiness"], correct: "happiness",
      explanation: "Cần danh từ làm tân ngữ của \"brings\". <b>happy</b> (adj) → <b>happiness</b> (n, +ness): niềm hạnh phúc."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "The local farmers welcomed the tourists very ______________ and offered them fresh fruits.",
      wordGiven: "generous", accepted: ["generously"], correct: "generously",
      explanation: "Cần trạng từ bổ nghĩa cho động từ \"welcomed\". <b>generous</b> (adj) → <b>generously</b> (adv, +ly): một cách hào phóng."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "Nam is an ______________ story teller; everyone loves listening to his tales about rural life.",
      wordGiven: "attract", accepted: ["attractive"], correct: "attractive",
      explanation: "Cần tính từ đứng trước danh từ \"story teller\". <b>attract</b> (v) → <b>attractive</b> (adj, +ive): thu hút, hấp dẫn."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "The continuous destruction of forests will lead to the ______________ of many rare plants.",
      wordGiven: "appear", accepted: ["disappearance"], correct: "disappearance",
      explanation: "Cần danh từ mang nghĩa đối lập đứng sau \"the\". <b>appear</b> (v) → <b>disappearance</b> (n, dis- + appear + ance): sự biến mất."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "picturesqueEntry",
      prompt: "Many visitors enjoy walking around and taking photos of the ____________________ in the old quarter.",
      accepted: ["picturesque streets"], correct: "picturesque streets",
      explanation: "Từ điển cho ví dụ \"The town is famous for its <b>picturesque streets</b> lined with colorful flowers.\" — khớp với việc du khách chụp ảnh ở khu phố cổ."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "picturesqueEntry",
      prompt: "We spent our weekend in a ____________________ surrounded by green hills and fresh air.",
      accepted: ["picturesque village", "picturesque cottage"], correct: "picturesque village / picturesque cottage",
      explanation: "Từ điển cho ví dụ \"The guide showed us a <b>picturesque village</b> nestled in the valley.\" hoặc \"They stayed in a <b>picturesque cottage</b> by the lake...\" — cả hai đều phù hợp với ngữ cảnh \"surrounded by green hills\"."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "Nam is a more attractive story teller than Mai.",
      starter: "Nam tells stories",
      accepted: ["nam tells stories more attractively than mai"],
      correct: "Nam tells stories more attractively than Mai.",
      explanation: "Tính từ so sánh hơn \"more attractive\" (adj) chuyển thành trạng từ so sánh hơn \"<b>more attractively</b>\" (adv) để bổ nghĩa cho động từ \"tells\".<br>→ <i>Nam tells stories more attractively than Mai.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "Ronaldo plays better than anybody in the team.",
      starter: "No one",
      accepted: [
        "no one in the team plays better than ronaldo",
        "no one in the team plays as well as ronaldo"
      ],
      correct: "No one in the team plays better than Ronaldo. / No one in the team plays as well as Ronaldo.",
      explanation: "\"X plays better than anybody\" (X chơi hay hơn bất kỳ ai) có thể chuyển thành \"<b>No one plays better than X</b>\" (Không ai chơi hay hơn X) — cùng khẳng định X giỏi nhất.<br>→ <i>No one in the team plays better than Ronaldo.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "Life in the city is more crowded than life in the countryside.",
      starter: "Life in the countryside isn't",
      accepted: ["life in the countryside isn't as crowded as life in the city"],
      correct: "Life in the countryside isn't as crowded as life in the city.",
      explanation: "So sánh hơn \"more crowded than\" chuyển thành so sánh bằng phủ định \"<b>isn't as crowded as</b>\" — cùng diễn tả thành phố đông đúc hơn nông thôn.<br>→ <i>Life in the countryside isn't as crowded as life in the city.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "Children often ride bicycles through the fields in their free time.",
      starter: "Children often spend",
      accepted: ["children often spend their free time riding bicycles through the fields"],
      correct: "Children often spend their free time riding bicycles through the fields.",
      explanation: "\"ride bicycles ... in their free time\" chuyển thành \"<b>spend + time + V-ing</b>\" (dành thời gian làm gì).<br>→ <i>Children often spend their free time riding bicycles through the fields.</i>"
    }
  ]
};
