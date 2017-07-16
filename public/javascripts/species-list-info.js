var species_dt={
	'optgroup1':{'label':'Case studies:',
				 'members': ['S_pneumoniae616','P_marinus_meta']},
	'optgroup2':{'label':'Pan-genomes from RefSeq records:',
				 'members': ['Acinetobacter_baumannii','Bacillus_anthracis','Burkholderia_pseudomallei','Bacillus_subtilis','Campylobacter_jejuni','Corynebacterium_pseudotuberculosis','Chlamydia_trachomatis','Escherichia_coli','Francisella_tularensis','Helicobacter_pylori','Klebsiella_pneumoniae','Lactococcus_lactis','Listeria_monocytogenes','Legionella_pneumophila','Mycobacterium_tuberculosis','Neisseria_meningitidis','Pseudomonas_aeruginosa','Staphylococcus_aureus','Salmonella_enterica','Streptococcus_pneumoniae','Streptococcus_pyogenes','Vibrio_cholerae','Xanthomonas_citri','Xanthomonas_oryzae','Yersinia_pestis']},
	'optgroup3':{'label':'Orders:',
				 'members': ['Pseudomonadales','Enterobacteriales','Vibrionales']},
	'Vibrionales': 'Vibrionales',
	'Pseudomonadales': 'Pseudomonadales',
	'Enterobacteriales': 'Enterobacteriales',
	'S_pneumoniae616':'Epidemiology of S. pneumoniae (Croucher et al)',
	'Spneumoniae616':'Epidemiology of S. pneumoniae (Croucher et al)',
	'P_marinus_meta':'Prochlorococcus marinus (Biller et al)',
	'Acinetobacter_baumannii': 'Acinetobacter baumannii (71)',
	'Bacillus_anthracis': 'Bacillus anthracis (43)',
	//'B_cereus': 'Bacillus cereus (36)',
	//'B_pertussis': 'Bordetella pertussis (291)',
	'Burkholderia_pseudomallei': 'Burkholderia pseudomallei (59)',
	'Bacillus_subtilis': 'Bacillus subtilis (50)',
	'Bacillus_thuringiensis': 'Bacillus thuringiensis (36)',
	//'B_velezensis': 'Bacillus velezensis (26)',
	'Campylobacter_jejuni': 'Campylobacter jejuni (113)',
	'Corynebacterium_pseudotuberculosis': 'Corynebacterium pseudotuberculosis (59)',
	'Chlamydia_trachomatis': 'Chlamydia trachomatis (68)',
	'Escherichia_coli': 'Escherichia coli (307)',
	'Francisella_tularensis': 'Francisella tularensis (35)',
	'Helicobacter_pylori': 'Helicobacter pylori (85)',
	'Klebsiella_pneumoniae': 'Klebsiella pneumoniae (109)',
	'Lactococcus_lactis': 'Lactococcus lactis (29)',
	'Listeria_monocytogenes': 'Listeria monocytogenes (95)',
	//'L plantarum': 'Lactobacillus plantarum (26)',
	'Legionella_pneumophila': 'Legionella pneumophila (62)',
	//'M abscessus': 'Mycobacterium abscessus (29)',
	'Mycobacterium_tuberculosis': 'Mycobacterium tuberculosis (51)',
	'Neisseria_meningitidis': 'Neisseria meningitidis (78)',
	'Pseudomonas_aeruginosa': 'Pseudomonas aeruginosa (71)',
	//'S agalactiae': 'Streptococcus agalactiae (29)',
	'Staphylococcus_aureus': 'Staphylococcus aureus (146)',
	'Salmonella_enterica': 'Salmonella enterica (260)',
	'Streptococcus_pneumoniae': 'Streptococcus pneumoniae (33)',
	'Streptococcus_pyogenes': 'Streptococcus pyogenes (50)',
	'Vibrio_cholerae': 'Vibrio cholerae (28)',
	'Xanthomonas_citri': 'Xanthomonas citri (26)',
	'Xanthomonas_oryzae': 'Xanthomonas oryzae (26)',
	'Yersinia_pestis': 'Yersinia pestis (33)'
};
var species_search_dt=[
{"species":"Escherichia coli","linkName":"Escherichia_coli"},
{"species":"Bordetella pertussis","linkName":"Bordetella_pertussis"},
{"species":"Salmonella enterica","linkName":"Salmonella_enterica"},
{"species":"Staphylococcus aureus","linkName":"Staphylococcus_aureus"},
{"species":"Campylobacter jejuni","linkName":"Campylobacter_jejuni"},
{"species":"Klebsiella pneumoniae","linkName":"Klebsiella_pneumoniae"},
{"species":"Listeria monocytogenes","linkName":"Listeria_monocytogenes"},
{"species":"Helicobacter pylori","linkName":"Helicobacter_pylori"},
{"species":"Neisseria meningitidis","linkName":"Neisseria_meningitidis"},
{"species":"Acinetobacter baumannii","linkName":"Acinetobacter_baumannii"},
{"species":"Pseudomonas aeruginosa","linkName":"Pseudomonas_aeruginosa"},
{"species":"Chlamydia trachomatis","linkName":"Chlamydia_trachomatis"},
{"species":"Legionella pneumophila","linkName":"Legionella_pneumophila"},
{"species":"Corynebacterium pseudotuberculosis","linkName":"Corynebacterium_pseudotuberculosis"},
{"species":"Burkholderia pseudomallei","linkName":"Burkholderia_pseudomallei"},
{"species":"Mycobacterium tuberculosis","linkName":"Mycobacterium_tuberculosis"},
{"species":"Bacillus subtilis","linkName":"Bacillus_subtilis"},
{"species":"Streptococcus pyogenes","linkName":"Streptococcus_pyogenes"},
{"species":"Bacillus anthracis","linkName":"Bacillus_anthracis"},
{"species":"Bacillus thuringiensis","linkName":"Bacillus_thuringiensis"},
{"species":"Bacillus cereus","linkName":"Bacillus_cereus"},
{"species":"Francisella tularensis","linkName":"Francisella_tularensis"},
{"species":"Yersinia pestis","linkName":"Yersinia_pestis"},
{"species":"Streptococcus pneumoniae","linkName":"Streptococcus_pneumoniae"},
{"species":"Mycobacterium abscessus","linkName":"Mycobacterium_abscessus"},
{"species":"Lactococcus lactis","linkName":"Lactococcus_lactis"},
{"species":"Streptococcus agalactiae","linkName":"Streptococcus_agalactiae"},
{"species":"Vibrio cholerae","linkName":"Vibrio_cholerae"},
{"species":"Xanthomonas oryzae","linkName":"Xanthomonas_oryzae"},
{"species":"Lactobacillus plantarum","linkName":"Lactobacillus_plantarum"},
{"species":"Bacillus velezensis","linkName":"Bacillus_velezensis"},
{"species":"Xanthomonas citri","linkName":"Xanthomonas_citri"},
{"species":"Streptococcus suis","linkName":"Streptococcus_suis"},
{"species":"Buchnera aphidicola","linkName":"Buchnera_aphidicola"},
{"species":"Clostridium botulinum","linkName":"Clostridium_botulinum"},
{"species":"Mycoplasma pneumoniae","linkName":"Mycoplasma_pneumoniae"},
{"species":"Enterobacter cloacae","linkName":"Enterobacter_cloacae"},
{"species":"Dehalococcoides mccartyi","linkName":"Dehalococcoides_mccartyi"},
//{"species":"Pseudomonas sp.","linkName":"Pseudomonas sp."},
{"species":"Synechococcus sp.","linkName":"Synechococcus_sp."},
{"species":"Enterococcus faecium","linkName":"Enterococcus_faecium"},
{"species":"Pseudomonas putida","linkName":"Pseudomonas_putida"},
{"species":"Bacillus amyloliquefaciens","linkName":"Bacillus_amyloliquefaciens"},
{"species":"Campylobacter coli","linkName":"Campylobacter_coli"},
{"species":"Streptomyces sp.","linkName":"Streptomyces_sp."},
{"species":"Piscirickettsia salmonis","linkName":"Piscirickettsia_salmonis"},
{"species":"Bifidobacterium longum","linkName":"Bifidobacterium_longum"},
{"species":"Haemophilus influenzae","linkName":"Haemophilus_influenzae"},
//{"species":"Bacillus sp.","linkName":"Bacillus sp."},
{"species":"Burkholderia mallei","linkName":"Burkholderia_mallei"},
{"species":"Pasteurella multocida","linkName":"Pasteurella_multocida"},
{"species":"Brucella suis","linkName":"Brucella_suis"},
{"species":"Corynebacterium glutamicum","linkName":"Corynebacterium_glutamicum"},
{"species":"Corynebacterium diphtheriae","linkName":"Corynebacterium_diphtheriae"},
{"species":"Streptococcus thermophilus","linkName":"Streptococcus_thermophilus"},
{"species":"Pseudomonas fluorescens","linkName":"Pseudomonas_fluorescens"},
{"species":"Bifidobacterium animalis","linkName":"Bifidobacterium_animalis"},
{"species":"Burkholderia cenocepacia","linkName":"Burkholderia_cenocepacia"},
{"species":"Chlamydia psittaci","linkName":"Chlamydia_psittaci"},
{"species":"Vibrio parahaemolyticus","linkName":"Vibrio_parahaemolyticus"},
{"species":"Burkholderia thailandensis","linkName":"Burkholderia_thailandensis"},
{"species":"Yersinia enterocolitica","linkName":"Yersinia_enterocolitica"},
{"species":"Mycobacterium bovis","linkName":"Mycobacterium_bovis"},
//{"species":"Burkholderia sp.","linkName":"Burkholderia_sp."},
{"species":"Brucella abortus","linkName":"Brucella_abortus"},
{"species":"Aeromonas hydrophila","linkName":"Aeromonas_hydrophila"},
{"species":"Lactobacillus delbrueckii","linkName":"Lactobacillus_delbrueckii"},
{"species":"Acetobacter pasteurianus","linkName":"Acetobacter_pasteurianus"},
{"species":"Rhizobium phaseoli","linkName":"Rhizobium_phaseoli"},
{"species":"Yersinia pseudotuberculosis","linkName":"Yersinia_pseudotuberculosis"},
{"species":"Pseudomonas syringae","linkName":"Pseudomonas_syringae"},
{"species":"Alteromonas mediterranea","linkName":"Alteromonas_mediterranea"},
{"species":"Mycobacterium avium","linkName":"Mycobacterium_avium"},
{"species":"Ralstonia solanacearum","linkName":"Ralstonia_solanacearum"},
{"species":"Neisseria gonorrhoeae","linkName":"Neisseria_gonorrhoeae"},
{"species":"Arthrobacter sp.","linkName":"Arthrobacter_sp."},
{"species":"Rhizobium sp.","linkName":"Rhizobium_sp."},
//{"species":"Mycobacterium sp.","linkName":"Mycobacterium_sp."},
{"species":"Bacillus pumilus","linkName":"Bacillus_pumilus"},
//{"species":"Paenibacillus sp.","linkName":"Paenibacillus_sp."},
//{"species":"[Haemophilus] ducreyi","linkName":"[Haemophilus]_ducreyi"},
{"species":"Mycoplasma mycoides","linkName":"Mycoplasma_mycoides"},
{"species":"Propionibacterium acnes","linkName":"Propionibacterium_acnes"},
{"species":"Shigella flexneri","linkName":"Shigella_flexneri"},
{"species":"Rhodococcus sp.","linkName":"Rhodococcus_sp."},
{"species":"Rickettsia rickettsii","linkName":"Rickettsia_rickettsii"},
{"species":"Bifidobacterium breve","linkName":"Bifidobacterium_breve"},
{"species":"Mycoplasma gallisepticum","linkName":"Mycoplasma_gallisepticum"},
{"species":"Mannheimia haemolytica","linkName":"Mannheimia_haemolytica"},
{"species":"Granulibacter bethesdensis","linkName":"Granulibacter_bethesdensis"},
{"species":"Corynebacterium ulcerans","linkName":"Corynebacterium_ulcerans"},
{"species":"Enterococcus faecalis","linkName":"Enterococcus_faecalis"},
{"species":"Fusobacterium nucleatum","linkName":"Fusobacterium_nucleatum"},
{"species":"Riemerella anatipestifer","linkName":"Riemerella_anatipestifer"},
{"species":"Pseudomonas stutzeri","linkName":"Pseudomonas_stutzeri"},
{"species":"Paenibacillus polymyxa","linkName":"Paenibacillus_polymyxa"},
{"species":"Lactobacillus helveticus","linkName":"Lactobacillus_helveticus"},
{"species":"Rickettsia prowazekii","linkName":"Rickettsia_prowazekii"},
{"species":"Brucella melitensis","linkName":"Brucella_melitensis"},
{"species":"Prochlorococcus marinus","linkName":"Prochlorococcus_marinus"}];
