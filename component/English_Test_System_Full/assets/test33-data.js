const TEST = {
  id: "test33",
  grade: "Grade 6 — Global Success",
  unit: "Unit 5: Natural wonders of Viet Nam",
  title: "Grade 6 · Unit 5: Natural wonders of Viet Nam · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test33.html",
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
    { id: "VI", title: "Look at the dictionary entry of “backpack”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    vietnamCloze: "Viet Nam is in South-East Asia. It has a lot of beautiful mountains, rivers and beaches. There are (17) ________ long rivers in Viet Nam: the Red River in the North and the Mekong River in the South. The Mekong River is the longest river in South-East Asia and of course it is (18) ________ than the Red River. The Mekong River starts (19) ________ Tibet and flows to the East Sea. Fansipan is the highest mountain in Viet Nam. It's 3,143 meters (20) ________. Viet Nam also (21) ________ many nice beaches such as Tra Co, Sam Son, Nha Trang and Vung Tau. Tourists can have a (22) ________ time enjoying the beautiful landscapes here.",
    nhaTrangReading: "When people talk about Nha Trang, the biggest city in Khanh Hoa Province, they often think of a tropical paradise with a long coastline and beautiful white sandy beaches. In the morning or afternoon, tourists can take part in various outdoor activities such as mud bathing, swimming, scuba diving and snorkeling. Scuba diving and snorkeling are both interesting sports as swimmers swim underwater and admire the lives at the bottom of the sea. Tourists can also take boat trips to the islands. One of the most enjoyable things is the trip to Mieu island, where Tri Nguyen Aquarium was built in 19th century. This aquarium is now home to different kinds of colourful fish. Tourists can spend an evening visiting a fishing village where they eat a lot of local seafood such as crabs, shrimps and several kinds of fish. All are fresh and delicious.",
    backpackEntry: {
      word: "backpack", ipa: "/ˈbækpæk/", pos: "noun & verb",
      def: "1. (n) a large bag used for carrying things on your back, especially when you are walking or camping. 2. (v) to travel on holiday/vacation carrying your clothes and things in a backpack.",
      examples: [
        "He packed his <b>backpack</b> with warm clothes and food.",
        "She adjusted the straps of her <b>heavy backpack</b>.",
        "They decided to <b>go backpacking</b> around Europe this summer."
      ]
    }
  },
  images: {
    signPushTheDoor: "assets/images/sign_push_the_door.jpg",
    signCautionChildren: "assets/images/sign_children_at_play.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "arrived", B: "believed", C: "hoped", D: "received" },
      correct: "C",
      explanation: "Đuôi \"-ed\" phát âm là <b>/t/</b> khi động từ nguyên thể tận cùng bằng phụ âm vô thanh: \"hope\" tận cùng bằng /p/ (vô thanh) → \"hoped\" = /t/. Trong khi đó \"arrived\", \"believed\", \"received\" đều tận cùng bằng phụ âm hữu thanh (/v/) nên \"-ed\" đọc là <b>/d/</b> → khác biệt, đáp án C."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "item", B: "hiking", C: "site", D: "village" },
      correct: "D",
      explanation: "Phần gạch chân là chữ cái \"i\". \"item\" /ˈaɪtəm/, \"hiking\" /ˈhaɪkɪŋ/, \"site\" /saɪt/ đều có \"i\" phát âm là <b>/aɪ/</b>. Riêng \"village\" /ˈvɪlɪdʒ/ có \"i\" phát âm là <b>/ɪ/</b> → khác biệt, đáp án D."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "wonder", B: "forest", C: "forget", D: "sunny" },
      correct: "C",
      explanation: "\"wonder\" /ˈwʌndər/, \"forest\" /ˈfɔːrɪst/, \"sunny\" /ˈsʌni/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"forget\" /fərˈɡet/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án C."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "amazing", B: "dangerous", C: "important", D: "umbrella" },
      correct: "B",
      explanation: "\"amazing\" /əˈmeɪzɪŋ/, \"important\" /ɪmˈpɔːrtnt/, \"umbrella\" /ʌmˈbrelə/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"dangerous\" /ˈdeɪndʒərəs/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án B."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Nam: \"What is that in your hand, Minh?\"",
      prompt: "Minh: \"It's a __________. It is a kind of large warm bag for sleeping in, used by campers.\"",
      display: { A: "sleeping bag", B: "nylon bag", C: "handbag", D: "wallet" },
      correct: "A",
      explanation: "\"<b>sleeping bag</b>\" (túi ngủ) là túi lớn, ấm để chui vào ngủ, thường dùng khi cắm trại — đúng với định nghĩa được đưa ra."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Tom: \"Can I tell him the secret later tonight?\"",
      prompt: "Mary: \"No, you __________ tell him about this now because it's very important.\"",
      display: { A: "must", B: "mustn't", C: "to mustn't", D: "to must" },
      correct: "B",
      explanation: "\"mustn't\" (không được phép) diễn tả sự cấm đoán, phù hợp với \"No,...\" — Mary từ chối việc để lại đến tối nay và yêu cầu nói ngay bây giờ, nên phải dùng \"<b>mustn't</b>\" ở dạng phủ định của việc trì hoãn. \"must\" không có \"to\" đứng trước khi chia động từ khiếm khuyết."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Teacher: \"How many people joined the school's project last week?\"",
      prompt: "Monitor: \"Two hundred and sixty students __________ in the action-research study.\"",
      display: { A: "making", B: "take", C: "participated", D: "look at" },
      correct: "C",
      explanation: "\"<b>participated</b> in\" (đã tham gia vào) phù hợp với chủ ngữ số nhiều ở thì quá khứ và với giới từ \"in\" đi kèm."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Guide: \"Do you know anything about the highest peak in Vietnam?\"",
      prompt: "Tourist: \"Yes, __________ Fansipan is located in Lao Cai province, about 9km southwest of Sapa town.\"",
      display: { A: "Peak of", B: "Province", C: "Natural", D: "Mount" },
      correct: "D",
      explanation: "\"<b>Mount</b> Fansipan\" là cách gọi tên riêng của một ngọn núi, tương tự \"Mount Everest\"."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Elena: \"Is our trip to Ha Long Bay boring?\"",
      prompt: "David: \"Not at all! Visitors can join many __________ activities there.\"",
      display: { A: "excitingly", B: "exciting", C: "excite", D: "excitement" },
      correct: "B",
      explanation: "Cần tính từ đứng trước danh từ \"activities\". \"excite\" (v) → \"<b>exciting</b>\" (adj, +ing, thú vị, hấp dẫn)."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Son: \"How __________ sugar do you need for your tea, Mum?\"",
      prompt: "Mother: \"Just a little bit, please.\"",
      display: { A: "much", B: "any", C: "some", D: "many" },
      correct: "A",
      explanation: "\"sugar\" là danh từ không đếm được, trong câu hỏi dùng \"How <b>much</b>\" trước danh từ không đếm được."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Jane: \"Is Tuan Chau a small island?\"",
      prompt: "An: \"No, Tuan Chau is one __________ the largest islands in Ha Long Bay.\"",
      display: { A: "at", B: "of", C: "in", D: "to" },
      correct: "B",
      explanation: "Cấu trúc \"one <b>of</b> the + tính từ so sánh nhất + danh từ số nhiều\" (một trong những...) luôn dùng giới từ \"of\"."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Peter: \"Where can we meet to go camping this weekend?\"",
      prompt: "Mary: \"__________\"",
      display: { A: "How about meeting at the school gate?", B: "How about eating out?", C: "I don't want to meet.", D: "We can have some meat." },
      correct: "A",
      explanation: "Câu hỏi của Peter là hỏi về địa điểm gặp mặt, nên câu trả lời phù hợp là đề xuất một địa điểm cụ thể: \"<b>How about meeting at the school gate?</b>\""
    },
    { id: 13, section: "I", type: "mcq",
      context: "Guide: \"Prepare carefully! Don't forget to wear suncream and bring water.\"",
      prompt: "Tourist: \"__________\"",
      display: { A: "It's too late.", B: "Sure, thanks for reminding me.", C: "You're welcome.", D: "Don't mention it." },
      correct: "B",
      explanation: "\"<b>Sure, thanks for reminding me.</b>\" là lời đáp phù hợp khi ai đó nhắc nhở mình chuẩn bị điều gì đó."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Mai: \"I often get home quickly because there is little traffic on the road.\"",
      prompt: "Lan: \"__________\"",
      display: { A: "You are very lucky! My street is always crowded.", B: "I go home by bus every day.", C: "No, the road is very narrow.", D: "Traffic is a big problem in our town." },
      correct: "A",
      explanation: "\"<b>You are very lucky! My street is always crowded.</b>\" là phản hồi tự nhiên, thể hiện sự đối lập giữa hoàn cảnh của Mai (ít xe cộ) và của Lan (đường phố luôn đông đúc)."
    },

    // ---------------- SECTION II (15-16) — sign & notice ----------------
    { id: 15, section: "II", type: "mcq", image: "signPushTheDoor",
      prompt: "What does this sign tell you to do?",
      display: {
        A: "The door will open by itself automatically.",
        B: "The door is locked and you cannot enter.",
        C: "You need to pull the door toward you to open it.",
        D: "You need to press forward against the door to open it."
      },
      correct: "D",
      explanation: "Biển \"PUSH THE DOOR\" nghĩa là bạn cần đẩy cửa về phía trước để mở, không phải kéo → \"<b>You need to press forward against the door to open it.</b>\", đáp án D."
    },
    { id: 16, section: "II", type: "mcq", image: "signCautionChildren",
      prompt: "What does this sign say?",
      display: {
        A: "Children are not permitted to enter or play in this area.",
        B: "There are no children in this area at the moment.",
        C: "Be careful and look out for children who may be around.",
        D: "Children are studying inside the classroom right now."
      },
      correct: "C",
      explanation: "Biển \"CAUTION! CHILDREN AT PLAY\" là lời cảnh báo lái xe/người đi đường cẩn thận vì có thể có trẻ em đang chơi gần đó → \"<b>Be careful and look out for children who may be around.</b>\", đáp án C."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "vietnamCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "one", B: "much", C: "two", D: "any" },
      correct: "C",
      explanation: "Bài đọc kể tên đúng <b>hai</b> con sông dài (Red River và Mekong River) → \"there are <b>two</b> long rivers\"."
    },
    { id: 18, section: "III", type: "mcq", passage: "vietnamCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "longest", B: "long", C: "as long", D: "longer" },
      correct: "D",
      explanation: "Sau \"than\" cần dạng so sánh hơn: \"it is <b>longer</b> than the Red River\"."
    },
    { id: 19, section: "III", type: "mcq", passage: "vietnamCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "to", B: "on", C: "at", D: "in" },
      correct: "C",
      explanation: "\"starts <b>at</b> + tên địa danh cụ thể\" — giới từ \"at\" dùng để chỉ điểm bắt đầu."
    },
    { id: 20, section: "III", type: "mcq", passage: "vietnamCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "high", B: "deep", C: "heavy", D: "wide" },
      correct: "A",
      explanation: "Nói về độ cao của ngọn núi: \"3,143 meters <b>high</b>\" (cao 3.143 mét)."
    },
    { id: 21, section: "III", type: "mcq", passage: "vietnamCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "has", B: "is having", C: "have", D: "had" },
      correct: "A",
      explanation: "Chủ ngữ \"Viet Nam\" (số ít) ở thì hiện tại đơn cần động từ \"<b>has</b>\"."
    },
    { id: 22, section: "III", type: "mcq", passage: "vietnamCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "boring", B: "expensive", C: "bad", D: "nice" },
      correct: "D",
      explanation: "\"have a <b>nice</b> time\" là cụm cố định nghĩa \"có khoảng thời gian vui vẻ, dễ chịu\", phù hợp với việc ngắm cảnh đẹp."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "nhaTrangReading",
      prompt: "Nha Trang is a small town in Khanh Hoa Province.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"Nha Trang, the biggest city in Khanh Hoa Province\" — Nha Trang là thành phố lớn nhất, không phải thị trấn nhỏ."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "nhaTrangReading",
      prompt: "Tourists can go swimming and mud bathing in Nha Trang.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"tourists can take part in various outdoor activities such as mud bathing, swimming, scuba diving and snorkeling.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "nhaTrangReading",
      prompt: "Tri Nguyen Aquarium is located on Mieu island.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"the trip to Mieu island, where Tri Nguyen Aquarium was built\"."
    },
    { id: 26, section: "IV", type: "truefalse", passage: "nhaTrangReading",
      prompt: "There is no seafood for tourists to eat in the fishing village.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"they eat a lot of local seafood such as crabs, shrimps and several kinds of fish\" — có rất nhiều hải sản."
    },
    { id: 27, section: "IV", type: "mcq", passage: "nhaTrangReading",
      prompt: "What can swimmers do when they go scuba diving and snorkeling?",
      display: { A: "They can buy colourful fish.", B: "They can build an aquarium.", C: "They can see life under the sea.", D: "They can take a boat trip to town." },
      correct: "C",
      explanation: "Bài đọc: \"swimmers swim underwater and admire the lives at the bottom of the sea\" → họ có thể ngắm nhìn sự sống dưới đáy biển, đáp án C."
    },
    { id: 28, section: "IV", type: "mcq", passage: "nhaTrangReading",
      prompt: "The word \"fresh\" in the last paragraph is closest in meaning to __________.",
      display: { A: "recently caught or made", B: "very expensive to buy", C: "cooked a long time ago", D: "difficult to find locally" },
      correct: "A",
      explanation: "\"fresh\" (tươi) trong ngữ cảnh hải sản nghĩa là \"mới được đánh bắt hoặc chế biến gần đây\" → \"<b>recently caught or made</b>\", đáp án A."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "Sapa is famous for its stunning mountains and _____________ landscapes.",
      wordGiven: "WONDER", accepted: ["wonderful"], correct: "wonderful",
      explanation: "Cần tính từ đứng trước danh từ \"landscapes\". <b>wonder</b> (n/v) → <b>wonderful</b> (adj, +ful, tuyệt vời)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "We had an _____________ trip to Ba Vi National Park last autumn.",
      wordGiven: "FORGET", accepted: ["unforgettable"], correct: "unforgettable",
      explanation: "Cần tính từ đứng trước danh từ \"trip\". <b>forget</b> (v) → <b>unforgettable</b> (adj, un- + -able, khó quên)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The natural beauty of Ha Long Bay brings a lot of _____________ to visitors.",
      wordGiven: "EXCITE", accepted: ["excitement"], correct: "excitement",
      explanation: "Cần danh từ sau \"a lot of\". <b>excite</b> (v) → <b>excitement</b> (n, +ment, sự phấn khích)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "Fansipan is _____________ located in Lao Cai province, Vietnam.",
      wordGiven: "NATURE", accepted: ["naturally"], correct: "naturally",
      explanation: "Cần trạng từ bổ nghĩa cho động từ \"is located\". <b>nature</b> (n) → <b>natural</b> (adj) → <b>naturally</b> (adv, +ly)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "There are many _____________ wonders that you should explore in Vietnam.",
      wordGiven: "TRADITION", accepted: ["traditional"], correct: "traditional",
      explanation: "Cần tính từ đứng trước danh từ \"wonders\". <b>tradition</b> (n) → <b>traditional</b> (adj, +al, truyền thống)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "The guide gave us some _____________ tips before we went into the forest.",
      wordGiven: "USE", accepted: ["useful"], correct: "useful",
      explanation: "Cần tính từ đứng trước danh từ \"tips\". <b>use</b> (n/v) → <b>useful</b> (adj, +ful, hữu ích)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "backpackEntry",
      prompt: "Walking for hours with a __________________ can cause a lot of shoulder and back pain.",
      accepted: ["heavy backpack"], correct: "heavy backpack",
      explanation: "Từ điển cho ví dụ \"She adjusted the straps of her <b>heavy backpack</b>.\" — khớp với ngữ cảnh mang vác nặng gây đau vai lưng."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "backpackEntry",
      prompt: "Many students choose to __________________ during their gap year to see the world on a budget.",
      accepted: ["go backpacking"], correct: "go backpacking",
      explanation: "Từ điển cho ví dụ \"They decided to <b>go backpacking</b> around Europe this summer.\" — khớp với ngữ cảnh đi du lịch bụi."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "I'm sure you are very tired after working so hard.",
      starter: "You must",
      accepted: ["you must be very tired after working so hard"],
      correct: "You must be very tired after working so hard.",
      explanation: "\"I'm sure + S + V\" (chắc chắn rằng) có thể viết lại bằng \"S + <b>must</b> + V nguyên thể\" để diễn tả sự suy đoán chắc chắn.<br>→ <i>You must be very tired after working so hard.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "Remember to wear suncream and bring water during the trip.",
      starter: "Don't forget",
      accepted: ["don't forget to wear suncream and bring water during the trip"],
      correct: "Don't forget to wear suncream and bring water during the trip.",
      explanation: "\"Remember to + V\" (hãy nhớ) có nghĩa tương đương với \"<b>Don't forget to + V</b>\" (đừng quên).<br>→ <i>Don't forget to wear suncream and bring water during the trip.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "The Red River is shorter than the Mekong River.",
      starter: "The Mekong River is",
      accepted: ["the mekong river is longer than the red river"],
      correct: "The Mekong River is longer than the Red River.",
      explanation: "So sánh hơn \"A + is shorter + than + B\" có thể đảo chủ ngữ và tính từ trái nghĩa thành \"<b>B + is longer + than + A</b>\", giữ nguyên nghĩa.<br>→ <i>The Mekong River is longer than the Red River.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "There is a compass, a sleeping bag, and some plasters in their backpack.",
      starter: "Their backpack",
      accepted: ["their backpack has a compass, a sleeping bag, and some plasters"],
      correct: "Their backpack has a compass, a sleeping bag, and some plasters.",
      explanation: "Câu \"There is/are + N + in + N2\" có thể viết lại bằng \"<b>N2 + has/have + N</b>\", đổi chủ ngữ nhưng giữ nguyên nghĩa.<br>→ <i>Their backpack has a compass, a sleeping bag, and some plasters.</i>"
    }
  ]
};
