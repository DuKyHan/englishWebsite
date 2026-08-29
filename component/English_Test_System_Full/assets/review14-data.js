const REVIEW = {
  id: "test14",
  testFile: "test14.html",
  grade: "Grade 9 — Global Success",
  unit: "Unit 1: Local community",
  title: "Knowledge Review — Unit 1, Practice Test 2",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "garbage collector", pos: "n phr", ipa: "/ˈɡɑːrbɪdʒ kəˈlektər/", meaning: "người thu gom rác", example: "He is a garbage collector. He helps keep our neighborhood clean every day.", exampleVi: "Anh ấy là người thu gom rác. Anh giúp giữ khu phố sạch sẽ mỗi ngày." },
    { word: "put off", pos: "phr v", ipa: "/pʊt ɒf/", meaning: "hoãn lại", example: "He had to put off his trip because of a family emergency.", exampleVi: "Anh ấy phải hoãn chuyến đi vì có việc gia đình khẩn cấp." },
    { word: "neighborhood watch program", pos: "n phr", ipa: "/ˈneɪbərhʊd wɒtʃ ˈproʊɡræm/", meaning: "chương trình giám sát an ninh khu phố", example: "They wondered how to start the new neighborhood watch program.", exampleVi: "Họ không biết bắt đầu chương trình giám sát an ninh khu phố mới như thế nào." },
    { word: "charity event", pos: "n phr", ipa: "/ˈtʃærəti ɪˈvent/", meaning: "sự kiện từ thiện", example: "She asked who to organize the charity event but no one volunteered yet.", exampleVi: "Cô ấy hỏi ai sẽ tổ chức sự kiện từ thiện nhưng chưa ai xung phong." },
    { word: "handmade crafts", pos: "n phr", ipa: "/ˈhændmeɪd kræfts/", meaning: "đồ thủ công làm tay", example: "The local business in this neighborhood is known for its wide variety of handmade crafts.", exampleVi: "Cơ sở kinh doanh địa phương ở khu phố này nổi tiếng với nhiều loại đồ thủ công làm tay." },
    { word: "pollution", pos: "n", ipa: "/pəˈluːʃn/", meaning: "ô nhiễm", example: "The air in the city is bad because of severe pollution.", exampleVi: "Không khí trong thành phố tệ vì ô nhiễm nghiêm trọng." },
    { word: "permanent", pos: "adj", ipa: "/ˈpɜːrmənənt/", meaning: "lâu dài, vĩnh viễn", example: "We are looking for a permanent solution to the trash problem.", exampleVi: "Chúng tôi đang tìm một giải pháp lâu dài cho vấn đề rác thải." },
    { word: "permission", pos: "n", ipa: "/pərˈmɪʃn/", meaning: "sự cho phép", example: "The local authorities gave permission to hold the festival.", exampleVi: "Chính quyền địa phương đã cho phép tổ chức lễ hội." },
    { word: "beautifully", pos: "adv", ipa: "/ˈbjuːtəfəli/", meaning: "một cách đẹp đẽ", example: "The new community center is beautifully decorated.", exampleVi: "Trung tâm cộng đồng mới được trang trí rất đẹp." },
    { word: "advisable", pos: "adj", ipa: "/ədˈvaɪzəbl/", meaning: "nên làm, khôn ngoan", example: "It was advisable that he decided to leave the suburb.", exampleVi: "Việc anh ấy quyết định rời khỏi vùng ngoại ô là điều nên làm." },
    { word: "suburb", pos: "n", ipa: "/ˈsʌbɜːrb/", meaning: "vùng ngoại ô", example: "I live in a small suburb.", exampleVi: "Tôi sống ở một vùng ngoại ô nhỏ." },
    { word: "get on well with", pos: "phr v", ipa: "/ɡet ɒn wel wɪð/", meaning: "hòa hợp với", example: "She gets on well with her classmates.", exampleVi: "Cô ấy hòa hợp tốt với các bạn cùng lớp." },
    { word: "littering", pos: "n", ipa: "/ˈlɪtərɪŋ/", meaning: "hành vi xả rác bừa bãi", example: "The school will set up a new program to stop littering in the neighborhood.", exampleVi: "Nhà trường sẽ triển khai một chương trình mới để ngăn chặn việc xả rác trong khu phố." },
    { word: "tourist attraction", pos: "n phr", ipa: "/ˈtʊrɪst əˈtrækʃn/", meaning: "điểm thu hút khách du lịch", example: "The Eiffel Tower is a major tourist attraction in Paris.", exampleVi: "Tháp Eiffel là một điểm thu hút khách du lịch lớn ở Paris." },
    { word: "mutual attraction", pos: "n phr", ipa: "/ˈmjuːtʃuəl əˈtrækʃn/", meaning: "sự thu hút lẫn nhau", example: "They fell in love quickly because there was a mutual attraction between them.", exampleVi: "Họ nhanh chóng yêu nhau vì có sự thu hút lẫn nhau giữa hai người." },
    { word: "inspection", pos: "n", ipa: "/ɪnˈspekʃn/", meaning: "sự kiểm tra", example: "You must keep your ticket for inspection.", exampleVi: "Bạn phải giữ vé để phục vụ việc kiểm tra." },
    { word: "lacquerware", pos: "n", ipa: "/ˈlækərweər/", meaning: "đồ sơn mài", example: "The artisanal lacquerware of this village is famous nationwide.", exampleVi: "Đồ sơn mài thủ công của làng này nổi tiếng khắp cả nước." },
    { word: "artisanal", pos: "adj", ipa: "/ɑːrˈtɪzənl/", meaning: "làm thủ công theo kiểu nghệ nhân", example: "The artisanal lacquerware of this village is famous nationwide.", exampleVi: "Đồ sơn mài thủ công tinh xảo của làng này nổi tiếng khắp cả nước." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'người thu gom rác':", options: { A: "firefighter", B: "garbage collector", C: "police officer", D: "electrician" }, correct: "B", explanation: "<b>garbage collector</b> (n phr) = người thu gom rác." },
      { id: "vp2", prompt: "Choose the word that means 'hoãn lại':", options: { A: "set up", B: "take down", C: "put off", D: "cut down on" }, correct: "C", explanation: "<b>put off</b> (phr v) = hoãn lại." },
      { id: "vp3", prompt: "Choose the best word: \"She has a good relationship with her classmates.\" → She ______ with her classmates.", options: { A: "gets on well", B: "puts off", C: "takes down", D: "sets up" }, correct: "A", explanation: "\"<b>get on well with</b>\" (hòa hợp với) đồng nghĩa với \"have a good relationship with\"." },
      { id: "vp4", prompt: "Choose the word that means 'sự cho phép':", options: { A: "permission", B: "pollution", C: "inspection", D: "attraction" }, correct: "A", explanation: "<b>permission</b> (n) = sự cho phép." },
      { id: "vp5", prompt: "\"The school will ______ a new program to stop littering.\"", options: { A: "break down", B: "cut down on", C: "set up", D: "look around" }, correct: "C", explanation: "\"<b>set up</b>\" (thành lập, triển khai) là cụm động từ phù hợp." },
      { id: "vp6", prompt: "Choose the word that means 'điểm thu hút khách du lịch':", options: { A: "tourist attraction", B: "mutual attraction", C: "local business", D: "suburb" }, correct: "A", explanation: "<b>tourist attraction</b> (n phr) = điểm thu hút khách du lịch." }
    ],
    fillblank: [
      { id: "vf1", prompt: "He had to ______________ (hoãn) his trip because of a family emergency.", accepted: ["put off"], correct: "put off", explanation: "<b>put off</b> (phr v) = hoãn lại." },
      { id: "vf2", prompt: "The local authorities gave ______________ (sự cho phép) to hold the festival.", accepted: ["permission"], correct: "permission", explanation: "<b>permission</b> (n) = sự cho phép." },
      { id: "vf3", prompt: "The air in the city is bad because of severe ______________ (ô nhiễm).", accepted: ["pollution"], correct: "pollution", explanation: "<b>pollution</b> (n) = ô nhiễm." },
      { id: "vf4", prompt: "We are looking for a ______________ (lâu dài) solution to the trash problem.", accepted: ["permanent"], correct: "permanent", explanation: "<b>permanent</b> (adj) = lâu dài, vĩnh viễn." },
      { id: "vf5", prompt: "She ______________ (hòa hợp) well with her classmates.", accepted: ["gets on"], correct: "gets on", explanation: "<b>get on well with</b> (phr v) = hòa hợp với." },
      { id: "vf6", prompt: "The Eiffel Tower is a major ______________ (điểm thu hút khách du lịch) in Paris.", accepted: ["tourist attraction"], correct: "tourist attraction", explanation: "<b>tourist attraction</b> (n phr) = điểm thu hút khách du lịch." }
    ],
    matching: {
      left: ["permission", "pollution", "suburb", "inspection", "advisable", "littering"],
      right: ["sự cho phép", "ô nhiễm", "vùng ngoại ô", "sự kiểm tra", "nên làm, khôn ngoan", "hành vi xả rác bừa bãi"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"The new community center is ______ decorated.\" (BEAUTY)", options: { A: "beauty", B: "beautiful", C: "beautifully", D: "beautify" }, correct: "C", explanation: "Cần trạng từ bổ nghĩa cho \"decorated\" → beauty (n) → <b>beautifully</b> (adv)." },
      { id: "cw2", prompt: "\"It was ______ that he decided to leave the suburb.\" (ADVICE)", options: { A: "advice", B: "advise", C: "advisable", D: "advisably" }, correct: "C", explanation: "Cần tính từ sau \"was\" → advice (n) → <b>advisable</b> (adj)." },
      { id: "cw3", prompt: "\"The artisanal ______ of this village is famous nationwide.\" (LACQUER)", options: { A: "lacquer", B: "lacquerware", C: "lacquered", D: "lacquering" }, correct: "B", explanation: "Cần danh từ làm chủ ngữ → lacquer (n) → <b>lacquerware</b> (n, +ware)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'inspection' mean?", options: { A: "sự kiểm tra", B: "sự tha thứ", C: "sự trì hoãn", D: "sự trốn tránh" }, correct: "A", explanation: "inspection (n) = sự kiểm tra." },
      { id: "wm2", prompt: "What does 'put off' mean?", options: { A: "bắt đầu ngay", B: "hoãn lại", C: "hoàn thành", D: "hủy bỏ vĩnh viễn" }, correct: "B", explanation: "put off (phr v) = hoãn lại." },
      { id: "wm3", prompt: "What does 'mutual attraction' mean?", options: { A: "sự thu hút lẫn nhau", B: "sự xa lánh", C: "sự cạnh tranh", D: "sự nghi ngờ" }, correct: "A", explanation: "mutual attraction (n phr) = sự thu hút lẫn nhau." }
    ],
    wordForm: [
      { id: "wf1", prompt: "The air in the city is bad because of severe (POLLUTE) ______________.", accepted: ["pollution"], correct: "pollution", explanation: "pollute (v) → pollution (n)." },
      { id: "wf2", prompt: "We are looking for a (PERMANENCE) ______________ solution to the trash problem.", accepted: ["permanent"], correct: "permanent", explanation: "permanence (n) → permanent (adj)." },
      { id: "wf3", prompt: "The local authorities gave (PERMIT) ______________ to hold the festival.", accepted: ["permission"], correct: "permission", explanation: "permit (v) → permission (n)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "wh-word + can + V ⇄ wh-word + to-V",
      usage: "Khi hai mệnh đề có cùng chủ ngữ, cấu trúc \"wh-word + can + V\" trong câu hỏi gián tiếp có thể rút gọn thành \"wh-word + to-V\" mà không đổi nghĩa.",
      formulas: [
        "S + know/wonder + wh-word + S + can + V.  →  S + know/wonder + wh-word + to + V.",
        "I don't know how I can get to the swimming pool. → I don't know how to get to the swimming pool."
      ],
      signals: ["can", "wh-word + to-V"],
      examples: [
        { en: "I don't know how I can get to the swimming pool.", vi: "Tôi không biết làm sao để đến hồ bơi." },
        { en: "I don't know how to get to the swimming pool.", vi: "Tôi không biết cách để đến hồ bơi." }
      ],
      mistakes: [
        { wrong: "I don't know how to I get there.", right: "I don't know how to get there." }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "She doesn't know where she can buy the tickets. → She doesn't know ______________ (where to) buy the tickets.", accepted: ["where to"], correct: "where to", explanation: "wh-word + can + V → wh-word + to-V." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'He isn't sure how he can fix the printer.' → He isn't sure ______________ (how to) fix the printer.", accepted: ["how to"], correct: "how to", explanation: "wh-word + can + V → wh-word + to-V." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'I don't know when I can visit my grandparents.' → I don't know ______________ (when to visit my grandparents).", accepted: ["when to visit my grandparents"], correct: "when to visit my grandparents", explanation: "wh-word + can + V → wh-word + to-V." }
        ]
      }
    },
    {
      id: "g2", name: "wh-word + should + V ⇄ wh-word + to-V (hỏi ai / cái gì)",
      usage: "Tương tự với động từ khuyết thiếu \"should\": \"wh-word + should + V\" trong câu hỏi/lời nhờ gián tiếp có thể rút gọn thành \"wh-word + to-V\" khi chủ ngữ hai mệnh đề trùng nhau.",
      formulas: [
        "Could you tell me + wh-word + S + should + V?  →  Could you tell me + wh-word + to + V?",
        "Could you tell me who I should ask for advice? → Could you tell me who to ask for advice?"
      ],
      signals: ["should", "wh-word + to-V"],
      examples: [
        { en: "Could you tell me who I should ask for advice?", vi: "Bạn có thể cho tôi biết nên hỏi ai để xin lời khuyên không?" },
        { en: "Could you tell me who to ask for advice?", vi: "Bạn có thể cho tôi biết nên hỏi ai để xin lời khuyên không?" }
      ],
      mistakes: [
        { wrong: "Could you tell me who should I ask?", right: "Could you tell me who to ask?" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "Could you tell me which bus I should take? → Could you tell me ______________ (which bus to) take?", accepted: ["which bus to"], correct: "which bus to", explanation: "wh-word + should + V → wh-word + to-V." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'Can you tell me what I should do next?' → Can you tell me ______________ (what to) do next?", accepted: ["what to"], correct: "what to", explanation: "wh-word + should + V → wh-word + to-V." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Could you tell me where I should sign the form?' → Could you tell me ______________ (where to sign the form)?", accepted: ["where to sign the form"], correct: "where to sign the form", explanation: "wh-word + should + V → wh-word + to-V." }
        ]
      }
    },
    {
      id: "g3", name: "have a good relationship with sb ⇄ get on well with sb",
      usage: "\"have a good relationship with sb\" (có mối quan hệ tốt với ai) có thể diễn đạt lại bằng cụm động từ \"get on well with sb\" (hòa hợp với ai) — cùng nghĩa, thường dùng trong văn nói.",
      formulas: [
        "S + have/has a good relationship with + sb.  →  S + get/gets on well with + sb.",
        "She has a good relationship with her classmates. → She gets on well with her classmates."
      ],
      signals: ["have a good relationship with", "get on well with"],
      examples: [
        { en: "She has a good relationship with her classmates.", vi: "Cô ấy có mối quan hệ tốt với các bạn cùng lớp." },
        { en: "She gets on well with her classmates.", vi: "Cô ấy hòa hợp tốt với các bạn cùng lớp." }
      ],
      mistakes: [
        { wrong: "She gets on well to her classmates.", right: "She gets on well with her classmates." }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "He has a good relationship with his neighbors. → He ______________ (gets on) well with his neighbors.", accepted: ["gets on"], correct: "gets on", explanation: "have a good relationship with → get on well with." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'They have a good relationship with their teacher.' → They ______________ (get on well with) their teacher.", accepted: ["get on well with"], correct: "get on well with", explanation: "have a good relationship with → get on well with." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'My sister has a good relationship with our new neighbors.' → ______________ (My sister gets on well with our new neighbors).", accepted: ["my sister gets on well with our new neighbors"], correct: "My sister gets on well with our new neighbors", explanation: "have a good relationship with → get on well with." }
        ]
      }
    },
    {
      id: "g4", name: "wh-word + should + V ⇄ wh-word + to-V (hỏi vật)",
      usage: "Áp dụng lại cùng quy tắc rút gọn câu hỏi gián tiếp với \"what\": \"wh-word + should + V\" → \"wh-word + to-V\" khi chủ ngữ hai mệnh đề giống nhau.",
      formulas: [
        "S + wonder + wh-word + S + should + V.  →  S + wonder + wh-word + to + V.",
        "They are wondering what they should buy for their grandmother. → They are wondering what to buy for their grandmother."
      ],
      signals: ["should", "wh-word + to-V"],
      examples: [
        { en: "They are wondering what they should buy for their grandmother.", vi: "Họ đang phân vân nên mua gì cho bà của họ." },
        { en: "They are wondering what to buy for their grandmother.", vi: "Họ đang phân vân phải mua gì cho bà của họ." }
      ],
      mistakes: [
        { wrong: "They are wondering what buy for their grandmother.", right: "They are wondering what to buy for their grandmother." }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "We are wondering what we should cook for dinner. → We are wondering ______________ (what to) cook for dinner.", accepted: ["what to"], correct: "what to", explanation: "wh-word + should + V → wh-word + to-V." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'I'm wondering what I should wear to the party.' → I'm wondering ______________ (what to) wear to the party.", accepted: ["what to"], correct: "what to", explanation: "wh-word + should + V → wh-word + to-V." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'She is wondering what she should say at the meeting.' → ______________ (She is wondering what to say at the meeting).", accepted: ["she is wondering what to say at the meeting"], correct: "She is wondering what to say at the meeting", explanation: "wh-word + should + V → wh-word + to-V." }
        ]
      }
    },
    {
      id: "g5", name: "Mệnh đề quan hệ không xác định với \"which\" thay cho danh từ",
      usage: "\"which\" trong mệnh đề quan hệ không xác định (có dấu phẩy) thay thế cho một danh từ chỉ vật đứng ngay trước nó, dùng để cung cấp thêm thông tin không bắt buộc.",
      formulas: [
        "N (vật), which + V ...  (which = N đứng trước)",
        "The community center, which is located in the heart of our town, offers a wide range of classes.",
        "Schools, which work closely with local groups, also plan special events."
      ],
      signals: ["N, which + V"],
      examples: [
        { en: "The community center, which is located in the heart of our town, offers a wide range of classes and activities.", vi: "Trung tâm cộng đồng, vốn nằm ở trung tâm thị trấn của chúng tôi, cung cấp nhiều lớp học và hoạt động." },
        { en: "Schools, which work closely with local groups, also plan special events that benefit the community.", vi: "Các trường học, vốn hợp tác chặt chẽ với các nhóm địa phương, cũng lên kế hoạch cho những sự kiện đặc biệt có lợi cho cộng đồng." }
      ],
      mistakes: [
        { wrong: "Schools, that work closely with local groups, ...", right: "Schools, which work closely with local groups, ... (dùng \"which\", không dùng \"that\", sau dấu phẩy)" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "The new park, ______________ (which) is close to my house, is very beautiful.", accepted: ["which"], correct: "which", explanation: "\"which\" thay cho danh từ vật \"the new park\"." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Combine: 'The library was built last year. It is very modern.' → The library, ______________ (which) was built last year, is very modern.", accepted: ["which"], correct: "which", explanation: "\"which\" thay cho danh từ vật \"the library\"." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Combine so it keeps the same meaning: 'The community hall hosts many events. It was renovated last month.' → ______________ (The community hall, which was renovated last month, hosts many events).", accepted: ["the community hall, which was renovated last month, hosts many events"], correct: "The community hall, which was renovated last month, hosts many events", explanation: "\"which\" thay cho danh từ vật đứng trước, bổ sung thông tin." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Our local community plays a crucial role in shaping a <mark data-w=\"vibrant\">vibrant</mark> and supportive environment for all residents. One of the most effective ways to strengthen community bonds is through active participation in local events and <mark data-w=\"initiatives\">initiatives</mark>. For instance, neighborhood clean-up drives not only enhance the beauty of our surroundings but also <mark data-w=\"foster\">foster</mark> a sense of pride and collaboration among residents. Additionally, community gardens offer a space where people can grow fresh produce, share gardening tips, and enjoy the benefits of working together. By supporting local businesses and attending town festivals, we contribute to the economic and cultural <mark data-w=\"vitality\">vitality</mark> of our area. Engaging with our community helps build lasting relationships, address local issues, and create a more <mark data-w=\"cohesive\">cohesive</mark> and resilient neighborhood.",
    vocabInContext: {
      vibrant: "sôi động, tràn đầy sức sống",
      initiatives: "sáng kiến, hoạt động khởi xướng",
      foster: "nuôi dưỡng, thúc đẩy",
      vitality: "sức sống, sự sôi động",
      cohesive: "gắn kết, liên kết chặt chẽ"
    },
    translation: "<b>SỰ GẮN KẾT VỚI CỘNG ĐỒNG ĐỊA PHƯƠNG</b><br><br>Cộng đồng địa phương của chúng ta đóng vai trò quan trọng trong việc tạo nên một môi trường sôi động và hỗ trợ cho tất cả cư dân. Một trong những cách hiệu quả nhất để tăng cường mối liên kết cộng đồng là tích cực tham gia vào các sự kiện và sáng kiến địa phương. Ví dụ, các chiến dịch dọn dẹp khu phố không chỉ làm đẹp môi trường xung quanh mà còn nuôi dưỡng niềm tự hào và sự hợp tác giữa cư dân. Ngoài ra, các vườn cộng đồng còn cung cấp một không gian nơi mọi người có thể trồng nông sản tươi, chia sẻ mẹo làm vườn, và tận hưởng lợi ích của việc làm việc cùng nhau. Bằng cách ủng hộ doanh nghiệp địa phương và tham gia các lễ hội thị trấn, chúng ta góp phần vào sức sống kinh tế và văn hóa của khu vực. Gắn kết với cộng đồng giúp xây dựng những mối quan hệ lâu bền, giải quyết các vấn đề địa phương, và tạo nên một khu phố gắn kết và kiên cường hơn.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Participating in local events can help make community relationships stronger.", correct: "True", explanation: "Bài đọc: 'active participation in local events and initiatives' giúp tăng cường mối liên kết cộng đồng." },
      { id: "r2", type: "truefalse", prompt: "Neighborhood clean-up drives only focus on improving the look of the area.", correct: "False", explanation: "Sai. Bài đọc: 'not only enhance the beauty... but also foster a sense of pride and collaboration.'" },
      { id: "r3", type: "truefalse", prompt: "People can share their gardening knowledge with others in community gardens.", correct: "True", explanation: "Bài đọc: 'community gardens offer a space where people can... share gardening tips.'" },
      { id: "r4", type: "truefalse", prompt: "Buying goods from local businesses harms the economic vitality of the neighborhood.", correct: "False", explanation: "Sai. Bài đọc: 'we contribute to the economic and cultural vitality of our area.'" },
      { id: "r5", type: "mcq", prompt: "What is the main idea of the passage?", options: { A: "The benefits of growing fresh vegetables in public areas.", B: "The importance of active participation in improving the local community.", C: "The negative effects of local businesses on town festivals.", D: "The history of neighborhood clean-up drives and community events." }, correct: "B", explanation: "Toàn bài nhấn mạnh việc tích cực tham gia giúp xây dựng cộng đồng vững mạnh hơn." },
      { id: "r6", type: "mcq", prompt: "Which of the following is NOT true according to the passage?", options: { A: "Supporting local businesses helps the area grow economically.", B: "Active participation helps people solve local problems together.", C: "Town festivals are the only way to build a resilient neighborhood.", D: "Cleaning the neighborhood helps residents feel proud of their surroundings." }, correct: "C", explanation: "Bài đọc chỉ nêu town festivals là MỘT trong nhiều cách, không phải cách duy nhất." },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'gắn kết, liên kết chặt chẽ' (adj).", accepted: ["cohesive"], correct: "cohesive", explanation: "'a more cohesive and resilient neighborhood' — cohesive (adj) = gắn kết, liên kết chặt chẽ." },
      { id: "r8", type: "mcq", prompt: "According to the passage, what do community gardens offer people?", options: { A: "A space to grow fresh produce and share gardening tips.", B: "Free tickets to town festivals.", C: "Jobs at local businesses.", D: "A place to hold neighborhood watch meetings." }, correct: "A", explanation: "Bài đọc: 'community gardens offer a space where people can grow fresh produce, share gardening tips...'" },
      { id: "r9", type: "truefalse", prompt: "According to the passage, engaging with the community only helps build relationships, not solve local issues.", correct: "False", explanation: "Sai. Bài đọc: 'Engaging with our community helps build lasting relationships, address local issues, and create a more cohesive... neighborhood.' — giúp cả hai điều." }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "In our local community, there are many people who come together to make life better.", suggested: "Trong cộng đồng địa phương của chúng ta, có nhiều người cùng nhau hợp sức để làm cho cuộc sống tốt đẹp hơn.", notes: "'come together' (cùng nhau hợp sức, đoàn kết lại)." },
    { id: "t2", en: "These events not only support small businesses but also create a sense of togetherness.", suggested: "Những sự kiện này không chỉ hỗ trợ các doanh nghiệp nhỏ mà còn tạo ra cảm giác gắn kết.", notes: "'not only ... but also ...' (không những... mà còn...)." },
    { id: "t3", en: "The community center, which is located in the heart of our town, offers a wide range of classes and activities.", suggested: "Trung tâm cộng đồng, vốn nằm ở trung tâm thị trấn của chúng tôi, cung cấp rất nhiều lớp học và hoạt động.", notes: "Mệnh đề quan hệ không xác định 'which' bổ sung thông tin về trung tâm cộng đồng." },
    { id: "t4", en: "Schools, which work closely with local groups, also plan special events that benefit the community.", suggested: "Các trường học, vốn hợp tác chặt chẽ với các nhóm địa phương, cũng lên kế hoạch cho những sự kiện đặc biệt có lợi cho cộng đồng.", notes: "Mệnh đề quan hệ không xác định 'which' bổ sung thông tin về các trường học." },
    { id: "t5", en: "By caring for one another and working as a team, we create a more friendly and supportive place for everyone.", suggested: "Bằng cách quan tâm lẫn nhau và làm việc như một đội, chúng ta tạo nên một nơi thân thiện và hỗ trợ hơn cho tất cả mọi người.", notes: "'care for one another' (quan tâm lẫn nhau); 'work as a team' (làm việc như một đội)." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "wh-word + can + V ⇄ wh-word + to-V",
      formula: "S + know/wonder + wh-word + S + can + V  →  S + know/wonder + wh-word + to-V",
      example: { before: "I don't know how I can get to the swimming pool.", after: "I don't know how to get to the swimming pool." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "She doesn't know when she can visit the museum. → She doesn't know ______________ (when to) visit the museum.", accepted: ["when to"], correct: "when to", explanation: "wh-word + can + V → wh-word + to-V." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'He isn't sure where he can charge his phone.' → He isn't sure ______________ (where to) charge his phone.", accepted: ["where to"], correct: "where to", explanation: "wh-word + can + V → wh-word + to-V." }
      ]
    },
    {
      id: "tr2", name: "wh-word + should + V ⇄ wh-word + to-V (hỏi ai)",
      formula: "Could you tell me + wh-word + S + should + V?  →  Could you tell me + wh-word + to-V?",
      example: { before: "Could you tell me who I should ask for advice?", after: "Could you tell me who to ask for advice?" },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "Could you tell me who I should contact for help? → Could you tell me ______________ (who to) contact for help?", accepted: ["who to"], correct: "who to", explanation: "wh-word + should + V → wh-word + to-V." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'Can you tell me which form I should fill in?' → Can you tell me ______________ (which form to) fill in?", accepted: ["which form to"], correct: "which form to", explanation: "wh-word + should + V → wh-word + to-V." }
      ]
    },
    {
      id: "tr3", name: "have a good relationship with ⇄ get on well with",
      formula: "S + have/has a good relationship with + sb  →  S + get/gets on well with + sb",
      example: { before: "She has a good relationship with her classmates.", after: "She gets on well with her classmates." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "We have a good relationship with our neighbors. → We ______________ (get on) well with our neighbors.", accepted: ["get on"], correct: "get on", explanation: "have a good relationship with → get on well with." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'He has a good relationship with his colleagues.' → He ______________ (gets on well with) his colleagues.", accepted: ["gets on well with"], correct: "gets on well with", explanation: "have a good relationship with → get on well with." }
      ]
    },
    {
      id: "tr4", name: "wh-word + should + V ⇄ wh-word + to-V (hỏi vật)",
      formula: "S + wonder + wh-word + S + should + V  →  S + wonder + wh-word + to-V",
      example: { before: "They are wondering what they should buy for their grandmother.", after: "They are wondering what to buy for their grandmother." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "I'm wondering what I should cook tonight. → I'm wondering ______________ (what to) cook tonight.", accepted: ["what to"], correct: "what to", explanation: "wh-word + should + V → wh-word + to-V." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'We are wondering what we should do this weekend.' → We are wondering ______________ (what to) do this weekend.", accepted: ["what to"], correct: "what to", explanation: "wh-word + should + V → wh-word + to-V." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Permission' means:", options: { A: "sự cho phép", B: "sự cấm đoán", C: "sự trừng phạt", D: "sự trì hoãn" }, correct: "A", explanation: "permission (n) = sự cho phép." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Put off' means:", options: { A: "bắt đầu ngay", B: "hoãn lại", C: "hoàn thành", D: "hủy vĩnh viễn" }, correct: "B", explanation: "put off (phr v) = hoãn lại." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "The air in the city is bad because of severe ______________ (ô nhiễm).", accepted: ["pollution"], correct: "pollution", explanation: "pollution (n) = ô nhiễm." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "I don't know how I can get there. → I don't know how ______ get there.", options: { A: "to", B: "can", C: "will", D: "should" }, correct: "A", explanation: "wh-word + can + V → wh-word + to-V." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "Could you tell me who I should ask? → Could you tell me who ______ ask?", options: { A: "should", B: "to", C: "will", D: "must" }, correct: "B", explanation: "wh-word + should + V → wh-word + to-V." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "She has a good relationship with her classmates. → She ______________ (gets on) well with her classmates.", accepted: ["gets on"], correct: "gets on", explanation: "have a good relationship with → get on well with." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "Schools, ______________ (which) work closely with local groups, also plan special events.", accepted: ["which"], correct: "which", explanation: "\"which\" thay cho danh từ vật \"Schools\" trong mệnh đề quan hệ không xác định." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Participating in local events can help make community relationships stronger.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Buying goods from local businesses harms the economic vitality of the neighborhood.", correct: "False", explanation: "Sai. Bài đọc nói tác động tích cực." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What is the main idea of the engagement passage?", options: { A: "The importance of active participation in improving the local community.", B: "The history of community gardens.", C: "How to organize a town festival.", D: "The cost of running local businesses." }, correct: "A", explanation: "Bài đọc nhấn mạnh tầm quan trọng của việc tích cực tham gia cộng đồng." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "The new community center is ______________ (beauty) decorated.", accepted: ["beautifully"], correct: "beautifully", explanation: "beauty (n) → beautifully (adv)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "It was ______________ (advice) that he decided to leave the suburb.", accepted: ["advisable"], correct: "advisable", explanation: "advice (n) → advisable (adj)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "The local authorities gave ______________ (permit) to hold the festival.", accepted: ["permission"], correct: "permission", explanation: "permit (v) → permission (n)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'sự thu hút lẫn nhau'?", options: { A: "mutual attraction", B: "tourist attraction", C: "local business", D: "suburb" }, correct: "A", explanation: "mutual attraction (n phr) = sự thu hút lẫn nhau." }
  ]
};
