 const  responses = {
    greetings: ["Hey, how are you doing today? Please enter your symptoms, e.g (Cough, Headache, e.t.c)", "Hello, how are you? Please enter your symptoms, e.g (Cough, Headache, e.t.c)"],
    get_headache: ["Hey, you seem to have headache?,", `Hey, does your head hurt?`],
    jokes: [
      'Do I lose when the police officer says papers and I say scissors?',
      'I have clean conscience. I haven’t used it once till now.',
      'Did you hear about the crook who stole a calendar? He got twelve months.',
    ],
    get_malaria:["You are showing symptoms of Malaria"],
    get_typhoid:["You are showing symptoms of Typhoid fever"],
    get_hayfever: ["You are showing symptoms of Hay Fever"],
    get_sinusitis: ["You are showing symptoms of Sinusitis (Sinus Infection)"],
    get_commoncold: ["You are showing symptoms of Common Cold"],
    noresponse:["I dont seem to understand you. Please enter your symptoms, e.g (Cough, Headache, e.t.c)"],
  };

  const  recommendations = {
    get_headache: ["Make sure you rest and sleep", `sleep well please`],
    get_malaria:["OVERVIEW: Malaria is a disease caused by a parasite. The parasite is transmitted to humans through the bites of infected mosquitoes. People who have malaria usually feel very sick, with a high fever and shaking chills. "],
    get_typhoid:["OVERVIEW: Typhoid fever is caused by Salmonella typhi bacteria.Typhoid fever spreads through contaminated food and water or through close contact with someone who's infected."],
    get_hayfever: ["OVERVIEW: Hay fever, also called allergic rhinitis, causes cold-like signs and symptoms, such as a runny nose, itchy eyes, congestion, sneezing and sinus pressure. But unlike a cold, hay fever isn't caused by a virus. Hay fever is caused by an allergic response to outdoor or indoor allergens, such as pollen, dust mites, or tiny flecks of skin and saliva shed by cats, dogs, and other animals with fur or feathers (pet dander). Hay fever is usually worse between late March and September, especially when it's warm, humid and windy. This is when the pollen count is at its highest."],
    get_sinusitis: ["OVERVIEW: Sinusitis is swelling of the sinuses, usually caused by an infection. It's common and usually clears up on its own within 2 to 3 weeks. But medicines can help if it's taking a long time to go away."],
    get_commoncold: ["OVERVIEW: The common cold is a viral infection of your nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of viruses can cause a common cold. Children younger than 6 are at greatest risk of colds, but healthy adults can also expect to have two or three colds annually. Most people recover from a common cold in a week or 10 days. Symptoms might last longer in people who smoke. If symptoms don't improve, see your doctor."],
  };

  const  symptoms = {
    get_headache: ["Make sure you rest and sleep", `sleep well please`],
    get_malaria:["SYMPTOMS: A malaria infection is generally characterized by the following signs and symptoms: FEVER, CHILLS, HEADACHE, NAUSEA AND VOMITING, MUSCLE PAIN. Other signs and symptoms may include: SWEATING, CHEST OR ABDOMINAL PAIN, COUGH "],
    get_typhoid:["SYMPTOMS: The symptoms of typhoid fever usually develop 1 or 2 weeks after a person becomes infected with the Salmonella typhi bacteria. The main symptoms of typhoid fever are: a HEADACHE, a HIGH TEMPERATURE, gerneral ACHES AND PAINS, CONSTIPATION, and later on STOMACH ACHE and DIARRHOEA"],
    get_hayfever: ["SYMPTOMS: Symptoms of hay fever include: SNEEZING AND COUGHING, RUNNY OR BLOCKED NOSE, ITCHY, RED or WATERY EYES, ITCHY THROAT, NOSE AND EARS, LOSS OF SMELL, PAIN AROUND YOUR TEMPLES AND FOREHEAD, HEADACHE, EARACHE, TIREDNESS. If you have Asthma, you might also: have atight feeling in your chest, be short of breadth, wheeze and cough."],
    get_sinusitis: ["SYMPTOMS: Sinusitis is common after a cold or flu. Symptoms of sinusitis include: PAIN, SWELLING and TENDERNESS around your CHEEKS, EYES and FOREHEAD, a BLOCKED NOSE, a reduced SENSE OF SMELL, GREEN or YELLOW MUCHUS FROM NOSE, a SINUS HEADACHE, a HIGH TEMPERATURE, TOOTHACHE, BAD BREADTH."],
    get_commoncold: ["SYMPTOMS: Cold symptoms come on gradually and can include: a BLOCKED OR RUNNY NOSE, a SORE THROAT, HEADACHE, MUSCLE ACHE, COUGH, SNEEZING, a RAISED TEMPERATURE, pressure in youyr eyes and ears, loss of taste and smell"],
  };

  const  causes = {
    get_headache: ["Make sure you rest and sleep", `sleep well please`],
    get_malaria:["CAUSES: Malaria is caused by the Plasmodium parasite. The parasite can be spread to humans through the bites of infected mosquitoes."],
    get_typhoid:["CAUSES: Typhoid fever is caused by a type of bacteria called Salmonella typhi. The Salmonella typhi bacteria will be in the poo (stools) of an infected person after they have been to the toilet. If they don't wash their hands properly afterwards, they can contaminate any food they touch. Anyone else who eats this food may also become infected."],
    get_hayfever: ["CAUSES: When you have hay fever, your immune system identifies a harmless airborne substance as harmful. Your immune system then produces antibodies to this harmless substance. The next time you come in contact with the substance, these antibodies signal your immune system to release chemicals such as histamine into your bloodstream, which cause a reaction that leads to the signs and symptoms of hay fever."],
    get_sinusitis: ["CAUSES: Sinusitis is most often caused by the common cold, which is a viral infection. In some cases, a bacterial infection develops."],
    get_commoncold: ["CAUSES: Although many types of viruses can cause a common cold, rhinoviruses are the most common culprit. A cold virus enters your body through your mouth, eyes or nose. The virus can spread through droplets in the air when someone who is sick coughs, sneezes or talks. It also spreads by hand-to-hand contact with someone who has a cold or by sharing contaminated objects, such as utensils, towels, toys or telephones. If you touch your eyes, nose or mouth after such contact or exposure, you're likely to catch a cold."],
  };

  const  drugs = {
    get_headache: ["take paracetamol or tramadol"],
    get_malaria:["TREATMENT: Antimalarial medication is used to prevent and treat malaria. To read more about how to prevent and treat malaria, visit https://www.nhs.uk/conditions/malaria/treatment/"],
    get_typhoid:["TREATMENT: You should visit your doctor if you think you have typhoid fever. If typhoid fever is diagnosed in its early stages, a course of antibiotic tablets may be prescribed for you. Most people need to take these for 7 to 14 days. To read more about typhoid fever, visit https://www.nhs.uk/conditions/typhoid-fever/treatment/"],
    get_hayfever: ["TREATMENT: There's currently no cure for hay fever and you cannot prevent it.But you can do things to ease your symptoms when the pollen count is high: Put Vaseline around your nostrils to trap pollen, Vacuum regularly and dust with a damp cloth, Shower and change your clothes after you have been outside to wash pollen off. To read more on Hay Ferver, visit https://www.nhs.uk/conditions/hay-fever/"],
    get_sinusitis: ["TREATMENT: Getting plenty of rest, Drinking plenty of fluids, Taking painkillers, such as Paracetamol or Ibuprofen (do not give aspirin to children under 16), Avoiding allergic triggers and not smoking, cleaning your nose with a salt water solution to ease congestion. To read more about Sinus Infection, visit https://www.nhs.uk/conditions/sinusitis-sinus-infection/"],
    get_commoncold: ["TREATMENT: To help you get better more quickly: rest and sleep, keep warm, drink plenty of water (fruit juice or squash mixed with water is OK) to avoid dehydration, gargle salt water to soothe a sore throat. A Pharmacist can also help with cold medicines. You can buy cough and cold medicines from pharmacies or supermarkets. A pharmacist can advise you on the best medicine. You can: relieve a blocked nose with decongestant sprays or tablets, ease aches or lower a temperature with painkillers like Paracetamol or Ibuprofen. To read more on Common Cold, visit https://www.nhs.uk/conditions/common-cold/"],
  };

  const allIntents={intss:["greetings","get_headache","get_malaria","get_typhoid","get_hayfever","get_sinusitis","get_commoncold","noresponse"]}

module.exports = {responses,symptoms,causes,recommendations,drugs,allIntents};