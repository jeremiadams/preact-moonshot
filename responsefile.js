 const  responses = {
    greetings: ["Hey, how are you doing today? Please enter your symptoms, e.g (Cough, Headache, e.t.c)", "Hello, how are you? Please enter your symptoms, e.g (Cough, Headache, e.t.c)"],
    get_headache: ["Hey, you seem to have headache?,", `Hey, does your head hurt?`],
    jokes: [
      'Do I lose when the police officer says papers and I say scissors?',
      'I have clean conscience. I haven’t used it once till now.',
      'Did you hear about the crook who stole a calendar? He got twelve months.',
    ],
    get_malaria:["You are showing symptoms of Malaria"],
    noresponse:["I dont seem to understand you. Please enter your symptoms, e.g (Cough, Headache, e.t.c)"]
  };

  const  recommendations = {
    get_headache: ["Make sure you rest and sleep", `sleep well please`],
    get_malaria:["OVERVIEW: Malaria is a disease caused by a parasite. The parasite is transmitted to humans through the bites of infected mosquitoes. People who have malaria usually feel very sick, with a high fever and shaking chills. "],
  };

  const  symptoms = {
    get_headache: ["Make sure you rest and sleep", `sleep well please`],
    get_malaria:["SYMPTOMS: A malaria infection is generally characterized by the following signs and symptoms: FEVER< CHILLS< HEADACHE< NAUSEA AND VOMITING, MUSCLE PAIN. Other signs and symptoms may include: SWEATING, CHEST OR ABDOMINAL PAIN, COUGH "],
  };

  const  causes = {
    get_headache: ["Make sure you rest and sleep", `sleep well please`],
    get_malaria:["CAUSES: Malaria is caused by the Plasmodium parasite. The parasite can be spread to humans through the bites of infected mosquitoes."],
  };

  const  drugs = {
    get_headache: ["take paracetamol or tramadol"],
    get_malaria:["TREATMENT: Antimalarial medication is used to prevent and treat malaria. To read more about how to prevent and treat malaria, visit https://www.nhs.uk/conditions/malaria/treatment/"],
  };

  const allIntents={intss:["greetings","get_headache","get_malaria","noresponse"]}

module.exports = {responses,symptoms,causes,recommendations,drugs,allIntents};