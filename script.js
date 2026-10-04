const form = document.getElementById("mealForm");

const resultSection = document.getElementById("result");

const mealGrid = document.getElementById("mealGrid");

const resultDescription =
    document.getElementById("resultDescription");

const profileSummary =
    document.getElementById("profileSummary");

const newPlan =
    document.getElementById("newPlan");


/* =========================================
   DATABASE
========================================= */

const foods = [

    /* ---------- BREAKFAST ---------- */

    {
        type: "breakfast",
        title: "تخم مرغ و نان سبوس‌دار",
        icon: "🍳",
        description: "تخم مرغ همراه نان سبوس‌دار و سبزیجات تازه.",
        tags: ["تخم مرغ", "نان", "سبزیجات"],
        types: ["normal", "vegetarian"],
        allergens: ["egg", "gluten"],
        ingredients: ["egg", "bread"],
        activity: ["low", "medium", "high"]
    },

    {
        type: "breakfast",
        title: "جو دوسر و میوه",
        icon: "🥣",
        description: "جو دوسر همراه میوه تازه و دانه‌های خوراکی.",
        tags: ["جو دوسر", "میوه", "دانه‌ها"],
        types: ["normal", "vegetarian", "vegan"],
        allergens: ["gluten"],
        ingredients: ["oats"],
        activity: ["low", "medium", "high"]
    },

    {
        type: "breakfast",
        title: "آووکادو و نان سبوس‌دار",
        icon: "🥑",
        description: "آووکادو همراه نان و سبزیجات تازه.",
        tags: ["آووکادو", "نان", "سبزیجات"],
        types: ["vegetarian", "vegan"],
        allergens: ["gluten"],
        ingredients: ["bread"],
        activity: ["low", "medium", "high"]
    },

    {
        type: "breakfast",
        title: "ماست، میوه و مغزها",
        icon: "🍓",
        description: "ماست همراه میوه تازه و مقدار مناسبی مغز.",
        tags: ["ماست", "میوه", "مغزها"],
        types: ["normal", "vegetarian"],
        allergens: ["dairy", "nuts"],
        ingredients: ["dairy", "nuts"],
        activity: ["medium", "high"]
    },


    /* ---------- SNACK ---------- */

    {
        type: "snack",
        title: "میوه تازه",
        icon: "🍎",
        description: "یک انتخاب ساده با میوه فصل.",
        tags: ["میوه فصل"],
        types: ["normal", "vegetarian", "vegan"],
        allergens: [],
        ingredients: [],
        activity: ["low", "medium", "high"]
    },

    {
        type: "snack",
        title: "موز و کره بادام‌زمینی",
        icon: "🍌",
        description: "موز همراه مقدار مناسبی کره بادام‌زمینی.",
        tags: ["موز", "بادام‌زمینی"],
        types: ["normal", "vegetarian", "vegan"],
        allergens: ["nuts"],
        ingredients: ["nuts"],
        activity: ["medium", "high"]
    },

    {
        type: "snack",
        title: "ماست و میوه",
        icon: "🥛",
        description: "ماست ساده همراه میوه تازه.",
        tags: ["ماست", "میوه"],
        types: ["normal", "vegetarian"],
        allergens: ["dairy"],
        ingredients: ["dairy"],
        activity: ["low", "medium", "high"]
    },

    {
        type: "snack",
        title: "هویج و حمص",
        icon: "🥕",
        description: "هویج تازه همراه حمص و نخود.",
        tags: ["هویج", "نخود"],
        types: ["normal", "vegetarian", "vegan"],
        allergens: [],
        ingredients: ["beans"],
        activity: ["low", "medium", "high"]
    },


    /* ---------- LUNCH ---------- */

    {
        type: "lunch",
        title: "مرغ، برنج و سالاد",
        icon: "🍗",
        description: "مرغ پخته همراه برنج و سالاد تازه.",
        tags: ["مرغ", "برنج", "سالاد"],
        types: ["normal"],
        allergens: [],
        ingredients: ["chicken", "rice"],
        activity: ["low", "medium", "high"]
    },

    {
        type: "lunch",
        title: "ماهی و برنج",
        icon: "🐟",
        description: "ماهی پخته همراه برنج و سبزیجات.",
        tags: ["ماهی", "برنج", "سبزیجات"],
        types: ["normal"],
        allergens: [],
        ingredients: ["fish", "rice"],
        activity: ["medium", "high"]
    },

    {
        type: "lunch",
        title: "کاسه عدس و سبزیجات",
        icon: "🥗",
        description: "عدس همراه غلات کامل و سبزیجات متنوع.",
        tags: ["عدس", "سبزیجات", "غلات"],
        types: ["vegetarian", "vegan"],
        allergens: ["gluten"],
        ingredients: ["beans"],
        activity: ["low", "medium", "high"]
    },

    {
        type: "lunch",
        title: "نخود و سبزیجات",
        icon: "🥙",
        description: "نخود، سبزیجات تازه و غلات کامل.",
        tags: ["نخود", "سبزیجات", "غلات"],
        types: ["vegetarian", "vegan"],
        allergens: ["gluten"],
        ingredients: ["beans"],
        activity: ["medium", "high"]
    },


    /* ---------- DINNER ---------- */

    {
        type: "dinner",
        title: "سوپ سبزیجات و عدس",
        icon: "🍲",
        description: "سوپ سبزیجات همراه عدس و نان سبوس‌دار.",
        tags: ["عدس", "سبزیجات", "نان"],
        types: ["normal", "vegetarian", "vegan"],
        allergens: ["gluten"],
        ingredients: ["beans", "bread"],
        activity: ["low", "medium", "high"]
    },

    {
        type: "dinner",
        title: "املت سبزیجات",
        icon: "🍳",
        description: "املت تخم مرغ همراه گوجه و سبزیجات.",
        tags: ["تخم مرغ", "گوجه", "سبزیجات"],
        types: ["normal", "vegetarian"],
        allergens: ["egg"],
        ingredients: ["egg"],
        activity: ["low", "medium"]
    },

    {
        type: "dinner",
        title: "کاسه سبزیجات و غلات",
        icon: "🥗",
        description: "ترکیبی از سبزیجات، غلات کامل و حبوبات.",
        tags: ["سبزیجات", "غلات", "حبوبات"],
        types: ["vegetarian", "vegan"],
        allergens: ["gluten"],
        ingredients: ["beans"],
        activity: ["low", "medium", "high"]
    },

    {
        type: "dinner",
        title: "مرغ و سبزیجات",
        icon: "🍗",
        description: "مرغ پخته همراه سبزیجات متنوع.",
        tags: ["مرغ", "سبزیجات"],
        types: ["normal"],
        allergens: [],
        ingredients: ["chicken"],
        activity: ["medium", "high"]
    }

];


/* =========================================
   UTILITIES
========================================= */

function randomItem(array) {

    if (!array.length) {
        return null;
    }

    const index =
        Math.floor(Math.random() * array.length);

    return array[index];
}


function shuffle(array) {

    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [copy[i], copy[j]] =
            [copy[j], copy[i]];
    }

    return copy;
}


/* =========================================
   FILTER FOODS
========================================= */

function getAvailableFoods(type, user) {

    return foods.filter(food => {

        /*
            نوع تغذیه
        */

        if (!food.types.includes(user.foodType)) {
            return false;
        }


        /*
            آلرژی
        */

        if (
            user.allergy !== "none" &&
            food.allergens.includes(user.allergy)
        ) {
            return false;
        }


        /*
            غذاهایی که کاربر دوست ندارد
        */

        const hasDislikedIngredient =
            food.ingredients.some(
                ingredient =>
                    user.dislikes.includes(ingredient)
            );

        if (hasDislikedIngredient) {
            return false;
        }


        /*
            سطح فعالیت
        */

        if (!food.activity.includes(user.activity)) {
            return false;
        }


        /*
            نوع وعده
        */

        if (food.type !== type) {
            return false;
        }


        return true;

    });

}


/* =========================================
   PICK UNIQUE MEAL
========================================= */

function pickMeal(type, user, usedTitles) {

    let available =
        getAvailableFoods(type, user);


    /*
        غذاهایی که قبلاً استفاده شده‌اند
        اولویت پایین‌تری دارند.
    */

    const unused =
        available.filter(
            food => !usedTitles.has(food.title)
        );


    if (unused.length > 0) {
        available = unused;
    }


    return randomItem(
        shuffle(available)
    );
}


/* =========================================
   CREATE PLAN
========================================= */

function createPlan(user) {

    const plan = [];

    const usedTitles = new Set();


    function addMeal(type) {

        const meal =
            pickMeal(
                type,
                user,
                usedTitles
            );


        if (meal) {

            plan.push(meal);

            usedTitles.add(meal.title);

        }

    }


    /*
        همیشه صبحانه داریم
    */

    addMeal("breakfast");


    /*
        بر اساس تعداد وعده
    */

    if (user.mealCount >= 4) {
        addMeal("snack");
    }


    addMeal("lunch");


    if (user.mealCount >= 5) {
        addMeal("snack");
    }


    addMeal("dinner");


    /*
        اگر به هر دلیل گزینه‌ای
        پیدا نشد، از غذاهای مجاز
        یک گزینه جایگزین می‌گیریم.
    */

    while (
        plan.length < user.mealCount
    ) {

        const types =
            ["breakfast", "snack", "lunch", "dinner"];

        const type =
            randomItem(types);

        addMeal(type);


        /*
            جلوگیری از حلقه بی‌نهایت
        */

        if (usedTitles.size >= foods.length) {
            break;
        }

    }


    return plan.slice(
        0,
        user.mealCount
    );
}


/* =========================================
   RENDER MEAL
========================================= */

function renderMeal(meal) {

    const card =
        document.createElement("article");

    card.className = "meal-card";


    const tags =
        meal.tags
            .map(tag => `<span>${tag}</span>`)
            .join("");


    const typeNames = {

        breakfast: "صبحانه",

        snack: "میان‌وعده",

        lunch: "ناهار",

        dinner: "شام"

    };


    card.innerHTML = `

        <div class="meal-top">

            <div class="meal-icon">
                ${meal.icon}
            </div>

            <span class="meal-type">
                ${typeNames[meal.type]}
            </span>

        </div>


        <h3>
            ${meal.title}
        </h3>


        <p>
            ${meal.description}
        </p>


        <div class="meal-tags">
            ${tags}
        </div>

    `;


    return card;
}


/* =========================================
   SUBMIT
========================================= */

form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const age =
            Number(
                document.getElementById("age").value
            );


        const height =
            Number(
                document.getElementById("height").value
            );


        const weight =
            Number(
                document.getElementById("weight").value
            );


        const activity =
            document.getElementById("activity").value;


        const mealCount =
            Number(
                document.getElementById("mealCount").value
            );


        const allergy =
            document.getElementById("allergy").value;


        const foodType =
            document.querySelector(
                'input[name="foodType"]:checked'
            ).value;


        const dislikes =
            Array.from(
                document.querySelectorAll(
                    ".dislike:checked"
                )
            ).map(
                checkbox => checkbox.value
            );


        const user = {

            age,

            height,

            weight,

            activity,

            mealCount,

            allergy,

            foodType,

            dislikes

        };


        const plan =
            createPlan(user);


        mealGrid.innerHTML = "";


        plan.forEach(meal => {

            mealGrid.appendChild(
                renderMeal(meal)
            );

        });


        if (plan.length === 0) {

            alert(
                "با این ترکیب ترجیحات غذایی، گزینه مناسبی پیدا نشد. لطفاً برخی انتخاب‌ها را تغییر دهید."
            );

            return;
        }


        /*
            خلاصه اطلاعات کاربر
        */

        profileSummary.innerHTML = `

            <span>🎂 ${age} سال</span>

            <span>📏 ${height} سانتی‌متر</span>

            <span>⚖️ ${weight} کیلوگرم</span>

            <span>
                🏃 ${
                    activity === "low"
                        ? "فعالیت کم"
                        : activity === "medium"
                            ? "فعالیت متوسط"
                            : "فعالیت زیاد"
                }
            </span>

            <span>
                🍽️ ${mealCount} وعده
            </span>

            <span>
                ${
                    foodType === "normal"
                        ? "🍗 معمولی"
                        : foodType === "vegetarian"
                            ? "🥬 گیاهخواری"
                            : "🌱 وگان"
                }
            </span>

        `;


        resultDescription.textContent =
            "غذاها بر اساس نوع تغذیه، سطح فعالیت، آلرژی‌ها و انتخاب‌های شما از میان گزینه‌های مختلف انتخاب شده‌اند.";


        resultSection.classList.add("show");


        setTimeout(() => {

            resultSection.scrollIntoView({
                behavior: "smooth"
            });

        }, 100);

    }
);


/* =========================================
   NEW PLAN
========================================= */

newPlan.addEventListener(
    "click",
    function() {

        document
            .getElementById("planner")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);