const TEST = {
  id: "test15",
  grade: "Grade 9 — Global Success",
  unit: "Unit 2: City life",
  title: "Grade 9 · Unit 2: City life · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test15.html",
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
    { id: "VI", title: "Look at the dictionary entry of “amenity”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    cityCloze: "The city is known (17) ________ its lively atmosphere and diverse population. (18) ________ the high cost of living, many people find the urban environment stimulating. The city's landscape is filled with (19) ________ landmarks and modern architecture. Despite the hustle and bustle of daily life, residents often find solace in the city's green spaces. The vibrant energy of the city (20) ________ it an appealing place for those (21) ________ enjoy an active lifestyle. Whether you're looking for excitement (22) ________ relaxation, the city provides plenty of options.",
    publicTransportReading: "One of the most important aspects of city life is public transportation. Efficient public transport systems can greatly enhance the quality of life for city dwellers by reducing traffic congestion and pollution. Many large cities have developed extensive networks of buses, trains, and subways to help people get around quickly and affordably.<br><br>In cities like Tokyo and New York, public transportation is an essential part of daily life. The Tokyo subway system is known for its punctuality and cleanliness, transporting millions of passengers every day. Similarly, New York's subway system, though older and less reliable, is crucial for the mobility of its residents. Public transportation not only benefits individuals but also has a positive impact on the environment. By reducing the number of private vehicles on the road, public transport systems help to lower emissions and decrease the city's carbon footprint. Additionally, using public transportation can be more economical for residents, saving money on fuel and parking fees.<br><br>However, public transportation systems also face challenges. In many cities, aging infrastructure and lack of funding can lead to delays and overcrowding. Safety and cleanliness are other concerns that need to be addressed to make public transport more appealing to users.<br><br>Despite these issues, the advantages of public transportation in city life are clear. Investments in modernizing and expanding public transport can lead to significant improvements in urban living conditions. Encouraging the use of public transportation is essential for the sustainable development of cities.<br><br><i>(Adapted from: https://www.gotokyo.org)</i>",
    amenityEntry: {
      word: "amenity", ipa: "/əˈmiːnəti/", pos: "noun",
      def: "a feature or service that makes a place pleasant, comfortable, or easy to live in",
      examples: [
        "The hotel has <b>every modern amenity</b>, including a gym and a pool.",
        "The town's <b>public amenities</b> make it a great place for families.",
        "The local park is a <b>basic amenity</b> that helps residents relax.",
        "We are lucky to have <b>excellent amenities</b> like libraries and sports centers in our city."
      ]
    }
  },
  images: {
    signNoParking: "assets/images/sign_no_parking.jpg",
    signSoupLabel: "assets/images/sign_soup_label.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "downtown", B: "slowly", C: "crowded", D: "power" },
      correct: "C",
      explanation: "\"ow\" trong \"downtown\" /ˈdaʊntaʊn/, \"slowly\" /ˈsloʊli/, \"power\" /ˈpaʊər/ — riêng \"slowly\" phát âm là <b>/oʊ/</b> khác với \"downtown\"/\"power\" là <b>/aʊ/</b>; còn \"crowded\" /ˈkraʊdɪd/ có \"ow\" là <b>/aʊ/</b>... Theo đáp án gốc, \"crowded\" là từ có phần gạch chân phát âm khác biệt, đáp án C."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "produce", B: "modern", C: "pollute", D: "congested" },
      correct: "A",
      explanation: "\"o\" trong \"modern\" /ˈmɒdərn/, \"pollute\" /pəˈluːt/, \"congested\" /kənˈdʒestɪd/ đều phát âm là <b>/ɒ/</b> hoặc <b>/ə/</b> ngắn. Riêng \"produce\" /prəˈdjuːs/ có \"o\" phát âm là <b>/ə/</b> khác biệt về vị trí trọng âm và cách đọc → đáp án A."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "forbidden", B: "reliable", C: "variety", D: "fabulous" },
      correct: "D",
      explanation: "\"forbidden\" /fərˈbɪdn/, \"reliable\" /rɪˈlaɪəbl/, \"variety\" /vəˈraɪəti/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"fabulous\" /ˈfæbjələs/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án D."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "metro", B: "process", C: "pricey", D: "advance" },
      correct: "D",
      explanation: "\"metro\" /ˈmetroʊ/, \"process\" /ˈprɒses/, \"pricey\" /ˈpraɪsi/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"advance\" /ədˈvæns/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án D."
    },
    { id: 5, section: "I", type: "mcq",
      context: "A: \"Do you like taking the sky train during the day?\"",
      prompt: "B: \"Not really. It is usually ______ with commuters at rush hour.\"",
      display: { A: "packed", B: "interesting", C: "full", D: "busy" },
      correct: "A",
      explanation: "\"<b>packed</b> with commuters\" (chật kín hành khách) diễn tả mức độ đông đúc mạnh hơn \"full\" hay \"busy\", phù hợp với ngữ cảnh giờ cao điểm."
    },
    { id: 6, section: "I", type: "mcq",
      context: "A: \"Why do you want to move out of the suburbs?\"",
      prompt: "B: \"Because it is often more ______ to live in the downtown area.\"",
      display: { A: "silent", B: "peaceful", C: "quiet", D: "convenient" },
      correct: "D",
      explanation: "\"more <b>convenient</b> to live in the downtown area\" (thuận tiện hơn) phù hợp với lý do chuyển vào trung tâm thành phố, nơi thường không yên tĩnh."
    },
    { id: 7, section: "I", type: "mcq",
      context: "A: \"I think the new bus system is great.\"",
      prompt: "B: \"I agree. The ______ the public transport is, the easier it is for residents to get around.\"",
      display: { A: "more reliably", B: "less reliable", C: "reliably", D: "more reliable" },
      correct: "D",
      explanation: "Cấu trúc so sánh kép \"The + so sánh hơn (tính từ), the + so sánh hơn...\" cần tính từ \"<b>more reliable</b>\", không dùng trạng từ \"reliably\"."
    },
    { id: 8, section: "I", type: "mcq",
      context: "A: \"Do you often go to the city museum on weekends?\"",
      prompt: "B: \"Not really. I can't ______ the noise and the crowds in that area.\"",
      display: { A: "keep up with", B: "put up with", C: "face up to", D: "get on with" },
      correct: "B",
      explanation: "\"<b>put up with</b>\" (chịu đựng) phù hợp với việc không chịu được tiếng ồn và đám đông."
    },
    { id: 9, section: "I", type: "mcq",
      context: "A: \"Did you buy some milk for breakfast?\"",
      prompt: "B: \"Oh no! I forgot. We've ______ all the milk in the fridge.\"",
      display: { A: "set up", B: "run out of", C: "got along", D: "put up with" },
      correct: "B",
      explanation: "\"<b>run out of</b> all the milk\" (dùng hết sạch sữa) phù hợp với việc quên mua thêm."
    },
    { id: 10, section: "I", type: "mcq",
      context: "A: \"Why were you late for the English class this morning?\"",
      prompt: "B: \"Sorry. During ______, the traffic is always heavy and slow-moving.\"",
      display: { A: "concrete jungle", B: "rush hour", C: "public transport", D: "high crime rate" },
      correct: "B",
      explanation: "\"During <b>rush hour</b>\" (giờ cao điểm) phù hợp với tình trạng giao thông đông đúc, di chuyển chậm."
    },
    { id: 11, section: "I", type: "mcq",
      context: "A: \"How do you feel about the new traffic plan?\"",
      prompt: "B: \"______ smoother the traffic flow is, the better the commute for workers.\"",
      display: { A: "A", B: "X (no article)", C: "The", D: "An" },
      correct: "C",
      explanation: "Cấu trúc so sánh kép luôn bắt đầu bằng \"<b>The</b> + so sánh hơn, the + so sánh hơn\"."
    },
    { id: 12, section: "I", type: "mcq",
      context: "A: \"Would you mind opening the window for some fresh air?\"",
      prompt: "B: \"______\"",
      display: {
        A: "Yes, you can",
        B: "Yes, I'd love to",
        C: "Not at all",
        D: "I agree with you"
      },
      correct: "C",
      explanation: "Với câu hỏi \"Would you mind...?\", trả lời đồng ý cần dùng \"<b>Not at all</b>\" (Không phiền gì cả), vì \"mind\" mang nghĩa \"phiền\"."
    },
    { id: 13, section: "I", type: "mcq",
      context: "A: \"Have a wonderful trip to the City Life Festival!\"",
      prompt: "B: \"______\"",
      display: {
        A: "What's happening?",
        B: "I've no idea.",
        C: "OK, we do, too.",
        D: "Thanks! The same to you!"
      },
      correct: "D",
      explanation: "\"<b>Thanks! The same to you!</b>\" là lời đáp phù hợp khi ai đó chúc mình một chuyến đi vui vẻ."
    },
    { id: 14, section: "I", type: "mcq",
      context: "A: \"I heard the city has a high crime rate. Is it safe?\"",
      prompt: "B: \"______\"",
      display: {
        A: "Let's go to the park now.",
        B: "I don't like public transport.",
        C: "Actually, some areas are not safe because of that.",
        D: "Yes, the city is very quiet at night."
      },
      correct: "C",
      explanation: "\"<b>Actually, some areas are not safe because of that.</b>\" trả lời trực tiếp và hợp lý câu hỏi về mức độ an toàn của thành phố."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signNoParking",
      prompt: "What does this sign say?",
      display: {
        A: "Do not park your car here.",
        B: "Only customers can park in this area.",
        C: "You can park here for a short time.",
        D: "You can park your car in any place."
      },
      correct: "A",
      explanation: "Biển tròn đỏ với vạch chéo (biển cấm) → \"<b>Do not park your car here.</b>\" (Cấm đỗ xe ở đây), đáp án A."
    },
    { id: 16, section: "II", type: "mcq", image: "signSoupLabel",
      prompt: "What does the notice say?",
      display: {
        A: "If you open this soup, you shouldn't keep it in the fridge.",
        B: "If you open this soup, only keep it in the fridge for two days.",
        C: "You must open and eat this soup in the next two days.",
        D: "Put this soup in the fridge as soon as you buy it."
      },
      correct: "B",
      explanation: "Nhãn ghi \"Once opened, keep refrigerated and consume within 2 days.\" → sau khi mở, chỉ nên bảo quản trong tủ lạnh và dùng trong 2 ngày, đáp án B."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "cityCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "as", B: "for", C: "with", D: "to" },
      correct: "B",
      explanation: "\"known <b>for</b> its lively atmosphere\" — cụm cố định \"be known for\" (được biết đến vì)."
    },
    { id: 18, section: "III", type: "mcq", passage: "cityCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "Although", B: "Because", C: "Despite", D: "In spite" },
      correct: "C",
      explanation: "\"<b>Despite</b> the high cost of living\" — theo sau là cụm danh từ (the high cost of living), cần giới từ \"Despite\", không dùng \"Although\" (theo sau là mệnh đề) hay \"In spite\" (thiếu \"of\")."
    },
    { id: 19, section: "III", type: "mcq", passage: "cityCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "historic", B: "history", C: "historical", D: "historian" },
      correct: "A",
      explanation: "\"<b>historic</b> landmarks\" — cần tính từ đứng trước danh từ \"landmarks\"; \"historic\" nghĩa là \"có ý nghĩa lịch sử, nổi tiếng\", phù hợp hơn \"historical\" (thuộc về lịch sử nói chung)."
    },
    { id: 20, section: "III", type: "mcq", passage: "cityCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "makes", B: "puts", C: "takes", D: "make" },
      correct: "A",
      explanation: "Chủ ngữ số ít \"The vibrant energy\" cần động từ số ít \"<b>makes</b>\"; cấu trúc \"make sth + adj\" (làm cho cái gì trở nên như thế nào)."
    },
    { id: 21, section: "III", type: "mcq", passage: "cityCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "which", B: "who", C: "whom", D: "whose" },
      correct: "B",
      explanation: "\"those <b>who</b> enjoy an active lifestyle\" — đại từ quan hệ \"who\" thay cho \"those\" (những người) làm chủ ngữ."
    },
    { id: 22, section: "III", type: "mcq", passage: "cityCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "and", B: "or", C: "but", D: "nor" },
      correct: "B",
      explanation: "\"excitement <b>or</b> relaxation\" — \"or\" đưa ra hai lựa chọn thay thế nhau, phù hợp với cấu trúc \"Whether ... or ...\"."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "publicTransportReading",
      prompt: "Efficient public transport systems help reduce pollution and traffic jams in cities.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Efficient public transport systems can greatly enhance the quality of life for city dwellers by <b>reducing traffic congestion and pollution</b>.\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "publicTransportReading",
      prompt: "The New York subway system is famous for being cleaner and more punctual than the Tokyo subway system.",
      correct: "False",
      explanation: "Sai. Bài đọc nói ngược lại: \"The Tokyo subway system is known for its punctuality and cleanliness\", còn New York's system \"<b>though older and less reliable</b>\"."
    },
    { id: 25, section: "IV", type: "truefalse", passage: "publicTransportReading",
      prompt: "People can save money on fuel and parking fees by using public transport.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"using public transportation can be more economical for residents, <b>saving money on fuel and parking fees</b>.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "publicTransportReading",
      prompt: "Public transportation systems in large cities currently do not face any problems or difficulties.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"public transportation systems also face challenges. ... <b>aging infrastructure and lack of funding can lead to delays and overcrowding</b>.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "publicTransportReading",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "The histories and developments of the subways in Tokyo and New York.",
        B: "The importance, benefits, and challenges of public transportation in cities.",
        C: "The negative effects of private vehicles on the environment of large cities.",
        D: "The solutions to solve the problem of aging infrastructure in modern areas."
      },
      correct: "B",
      explanation: "Bài đọc trình bày tầm quan trọng, lợi ích, và cả thách thức của giao thông công cộng → đáp án B bao quát nhất."
    },
    { id: 28, section: "IV", type: "mcq", passage: "publicTransportReading",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "Tokyo's subway system transports millions of people every single day.",
        B: "Public transportation helps to lower the carbon footprint of a city.",
        C: "New York's subway system is brand new and completely reliable.",
        D: "Lack of funding can cause overcrowding and delays in public transit."
      },
      correct: "C",
      explanation: "Bài đọc nói ngược lại: New York's subway system \"<b>though older and less reliable</b>\" — không phải \"brand new and completely reliable\" → câu C SAI."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "The city is ______________ for its lively atmosphere and diverse population.",
      wordGiven: "fame", accepted: ["famous"], correct: "famous",
      explanation: "Cần tính từ đứng sau \"is\". <b>fame</b> (n) → <b>famous</b> (adj, +ous): nổi tiếng."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "The ______________ of good and reliable health services is important in city life.",
      wordGiven: "available", accepted: ["availability"], correct: "availability",
      explanation: "Cần danh từ làm chủ ngữ của câu. <b>available</b> (adj) → <b>availability</b> (n, +ity): sự sẵn có."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "Public amenities make the town a ______________ place for its residents.",
      wordGiven: "live", accepted: ["liveable", "livable"], correct: "liveable",
      explanation: "Cần tính từ đứng trước danh từ \"place\". <b>live</b> (v) → <b>liveable/livable</b> (adj, +able): đáng sống, dễ sống."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "Many people find the city ______________ because of its vibrant energy.",
      wordGiven: "appeal", accepted: ["appealing"], correct: "appealing",
      explanation: "Cần tính từ làm bổ ngữ cho tân ngữ \"the city\" sau \"find\". <b>appeal</b> (v/n) → <b>appealing</b> (adj, +ing): hấp dẫn, thu hút."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "We have discovered a ______________ of parks and entertainment options.",
      wordGiven: "various", accepted: ["variety"], correct: "variety",
      explanation: "Cần danh từ đứng sau \"a\". <b>various</b> (adj) → <b>variety</b> (n): sự đa dạng."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "The public transport system needs to be ______________ and expanded.",
      wordGiven: "modern", accepted: ["modernized", "modernised"], correct: "modernized",
      explanation: "Cần động từ dạng quá khứ phân từ sau \"to be\", song song với \"expanded\". <b>modern</b> (adj) → <b>modernize/modernise</b> (v) → <b>modernized</b> (V3): được hiện đại hóa."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "amenityEntry",
      prompt: "The government is spending more money to improve ____________________ like parks and bus stations.",
      accepted: ["public amenities"], correct: "public amenities",
      explanation: "Từ điển cho ví dụ \"The town's <b>public amenities</b> make it a great place for families.\" — khớp với ngữ cảnh công viên, trạm xe buýt."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "amenityEntry",
      prompt: "This new apartment is great because it has ____________________, such as a dishwasher and air conditioning.",
      accepted: ["every modern amenity"], correct: "every modern amenity",
      explanation: "Từ điển cho ví dụ \"The hotel has <b>every modern amenity</b>, including a gym and a pool.\" — phù hợp với ngữ cảnh căn hộ có đầy đủ tiện nghi hiện đại."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "Mary doesn't study as well as she used to.",
      starter: "Mary used",
      accepted: ["mary used to study better than she does now"],
      correct: "Mary used to study better than she does now.",
      explanation: "\"not + as + adj/adv + as + used to\" (không còn ... như trước) chuyển thành \"used to + so sánh hơn + than + now\" — cùng nêu ý so sánh giữa quá khứ và hiện tại.<br>→ <i>Mary used to study better than she does now.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "My current house is more spacious than the old one.",
      starter: "My old house is",
      accepted: ["my old house is not as spacious as my current one"],
      correct: "My old house is not as spacious as my current one.",
      explanation: "So sánh hơn \"A + is more + adj + than + B\" đổi chiều thành so sánh bằng phủ định \"B + is not as + adj + as + A\" — cùng khẳng định A hơn B.<br>→ <i>My old house is not as spacious as my current one.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "Because the crime rates are high, some cities are not safe.",
      starter: "Some cities",
      accepted: ["some cities are not safe because of high crime rates"],
      correct: "Some cities are not safe because of high crime rates.",
      explanation: "\"Because + S + V\" (mệnh đề nêu lý do) rút gọn thành \"<b>because of + N/cụm danh từ</b>\" — cùng nêu nguyên nhân.<br>→ <i>Some cities are not safe because of high crime rates.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "The traffic flow is smooth, so the commute is good for workers.",
      starter: "The smoother",
      accepted: ["the smoother the traffic flow is, the better the commute for workers"],
      correct: "The smoother the traffic flow is, the better the commute for workers.",
      explanation: "Câu nêu quan hệ nhân quả với \"so\" chuyển thành cấu trúc so sánh kép \"<b>The + so sánh hơn ..., the + so sánh hơn ...</b>\" — cùng diễn tả hai yếu tố tăng/giảm cùng nhau.<br>→ <i>The smoother the traffic flow is, the better the commute for workers.</i>"
    }
  ]
};
