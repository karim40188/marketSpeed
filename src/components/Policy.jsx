import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Policy() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = `
  1. الاستخدام المشروع  
     يحق لكل الزوار استخدام الموقع وفقًا للأغراض المشروعة فقط. يُمنع أي سلوك غير قانوني أو مسيء أو ينتهك حقوق الآخرين.
  
  2. حقوق الملكية الفكرية  
     جميع المحتويات المعروضة على الموقع، بما في ذلك النصوص والصور والفيديوهات، هي ملكية فكرية محمية بموجب القوانين المعمول بها. يُمنع نسخ أو إعادة توزيع أي محتوى دون الحصول على إذن خطي مسبق.
  
  3. عملية الشراء  
     جميع الأسعار المعروضة على الموقع هي بالعملة المحلية (الجنيه المصري). عند إضافة أي منتج إلى عربة التسوق، يُعتبر ذلك تأكيدًا على رغبتك في شراء المنتج. يُرجى ملاحظة أن الطلبات تخضع للتوافر.
  
  4. سياسة الإرجاع  
     يحق للعميل إرجاع المنتجات خلال 30 يومًا من تاريخ الشراء، شريطة أن تكون في حالتها الأصلية، دون استخدام أو تلف. يُرجى مراجعة سياسة الإرجاع التفصيلية قبل الشراء.
  
  5. حسابات المستخدمين  
     يُطلب من المستخدمين التسجيل للحصول على حساب لتسهيل عملية الشراء. يتحمل المستخدم مسؤولية الحفاظ على سرية معلومات حسابه وأي نشاط يحدث من خلال حسابه.
  
  6. الإعلانات والتسويق  
     يحتفظ الموقع بالحق في عرض إعلانات عن منتجات أو خدمات معينة. ستُعتبر هذه الإعلانات جزءًا من تجربتك على الموقع، وقد تُرسل إليك عبر البريد الإلكتروني أو الرسائل النصية.
  
  7. التعديلات على الشروط  
     يحتفظ الموقع بالحق في تعديل هذه الشروط والأحكام في أي وقت. يُرجى مراجعة هذه الصفحة بشكل دوري للاطلاع على أي تغييرات.`;

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length -1) {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 5);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <Box>
      <Typography sx={{ fontSize: "40px", color: "#114F80" }}>
        الشاشة الشروط و الأحكام
      </Typography>

      <Box
        sx={{
          width: {xs:'auto',md:"855px"},
          minHeight: "818px",
          backgroundColor: "#fff",
          mx: "auto",
          p: "100px",
          my: "30px",
          borderRadius:'15px'
        }}
      >
        <Typography sx={{ fontWeight: "700", whiteSpace: "pre-wrap" }}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {displayedText}
          </motion.span>
        </Typography>
      </Box>
    </Box>
  );
}

export default Policy;
