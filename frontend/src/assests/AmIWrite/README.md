# Am I Write? Detection App
- An AI-Powered Mobile Application to help with identifying early stage of youths at risk.
- Built locally with self-trained AI then converted to Tensorflow Lite and incorporated into Kotlin. 
- Currently still developing in partnership with Society Against Family Violence (SAFV). 

![App Demo](amiwrite.gif)</br>

## Functions 
- A journal app where users can write journal about anything and even upload images. 
- When saving the journal, they will be prompted with a pop up to decide if they want their journal analysed. 
- If they choose to have their journal analysed, another pop up will appear with an abuse % returned from our AI model, together with recommendations mapped by SAFV depending on the severity of their situation. 
- If no abuse is detected, it will just inform our users that no abuse has been detected.
- If they choose not to have their journals analysed, it will just be saved like a regular journal entry, with no %. 
- Users can also return to journals to edit, view recommendations or even to delete them. 
- The current AI Model only detects family violence. However, together with SAFV, we are still looking into a broader scope of target audiences, focusing on more risk factors.

## My Responsibilities 
- In developing this application as a team of 3, my role is the AI Engineer. 
- Source for datasets.
- Manage the datasets we have scraped and cleaned. 
- Build, train, test and fine-tune the AI model. 
- Save the finalised model into local machine in order for it to be incorporated into Kotlin. 
