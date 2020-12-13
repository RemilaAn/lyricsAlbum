// Copyright 2016 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var cacheName = 'shall-we-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/src/d3.js',
  '/src/utils.js',
  '/src/list.js'
];

var lyricsFilesToCache = ["/src/lyrics/inji.txt", "/src/lyrics/aathangara.txt", "/src/lyrics/kathal_rojave.txt", "/src/lyrics/thentral_vanthu.txt", "/src/lyrics/mantram_vantha.txt", "/src/lyrics/adi_aathaadi.txt", "/src/lyrics/aanantham_aanantham_paadum.txt", "/src/lyrics/anbe_anbe_kollathe.txt", "/src/lyrics/evano_oruvan_vaasikiran.txt", "/src/lyrics/snehithane_snehithane.txt", "/src/lyrics/anjali_anjali.txt", "/src/lyrics/antha_arabi_kadaloram.txt", "/src/lyrics/kathal_oviyam.txt", "/src/lyrics/vizhiyil_vizhunthu_ithayam.txt", "/src/lyrics/kathalikum_pennin.txt", "/src/lyrics/oorvasi_oorvasi.txt", "/src/lyrics/ennavale_adi_ennavale.txt", "/src/lyrics/kannaalane_enathu_kannai.txt", "/src/lyrics/uyire_uyire.txt", "/src/lyrics/kannodu_kanbathellam.txt", "/src/lyrics/oh_ho_kicku_eruthe.txt", "/src/lyrics/vetr_kodi_kattu.txt", "/src/lyrics/kodiyile_malligaipoo.txt", "/src/lyrics/kurukku_siruthavale.txt", "/src/lyrics/ulunthu_vithaikaiyile.txt", "/src/lyrics/maalai_neram_mazhai_thoorum_kaalam.txt", "/src/lyrics/malargal_ketten.txt", "/src/lyrics/margali_thingal_allava.txt", "/src/lyrics/sowkiyama_kanne.txt", "/src/lyrics/mazhaithuli_mazhaithuli_mannil.txt", "/src/lyrics/megamaai_vanthu_pogiren.txt", "/src/lyrics/minsara_kanna.txt", "/src/lyrics/narumugaiye_narumugaiye.txt", "/src/lyrics/nathiye_nathiye_kathal_nathiye.txt", "/src/lyrics/or_unmai_sonnal.txt", "/src/lyrics/nenchankoottil_neeye.txt", "/src/lyrics/nila_kaaikirathu_nilam_theikirathu.txt", "/src/lyrics/odakaara_maarimuthu.txt", "/src/lyrics/maana_madura_maamara_kilaiyile.txt", "/src/lyrics/vennilave_vennilave_vinnai_thandi.txt", "/src/lyrics/oru_poiyavathu_sol_kanne.txt", "/src/lyrics/oruvan_oruvan_muthalali.txt", "/src/lyrics/paadariyen_padipariyen.txt", "/src/lyrics/naan_oru_sinthu.txt", "/src/lyrics/thanni_thotti_thedi.txt", "/src/lyrics/pachai_kiligal_tholodu.txt", "/src/lyrics/paakatha_enna_paakatha.txt", "/src/lyrics/pani_vizhum_malarvanam.txt", "/src/lyrics/paarthen_paathen_sudasuda.txt", "/src/lyrics/enakena_yerkanave_piranthaval.txt", "/src/lyrics/poongatrile_un_suvasathai.txt", "/src/lyrics/poonkaathu_thirumbuma.txt", "/src/lyrics/poovasam_purappadum_penne.txt", "/src/lyrics/poovukkul_olinthirukkum.txt", "/src/lyrics/porale_ponnuthaaye.txt", "/src/lyrics/pothi_vacha_malligai_mottu.txt", "/src/lyrics/puthu_vellai_malai.txt", "/src/lyrics/sarkarai_nilave.txt", "/src/lyrics/sangeetha_jaathimullai.txt", "/src/lyrics/sakalakka_baby.txt", "/src/lyrics/thaiya_thaiya.txt", "/src/lyrics/thenkizhakku_seemaiyile.txt", "/src/lyrics/thodu_thoduvenave_vaanvil.txt", "/src/lyrics/unnai_patha_pinbu_naan.txt", "/src/lyrics/uppu_karuvaadu.txt", "/src/lyrics/yaaro_yaaro_yaarodi_unnoda.txt", "/src/lyrics/kannadasan_kaaraikurai.txt", "/src/lyrics/kannum_kannum_nokia.txt", "/src/lyrics/kathaala_kannala.txt", "/src/lyrics/engayo_partha_mayakkam.txt", "/src/lyrics/enna_ithuvo_ennai_sutriye.txt", "/src/lyrics/eno_kangal_un_mugame.txt", "/src/lyrics/heartle_battery.txt", "/src/lyrics/kathal_vaithu_kathal_vaithu.txt", "/src/lyrics/kathal_yaanai.txt", "/src/lyrics/oru_kal_oru_kannadi.txt", "/src/lyrics/yaarai_kettu_dating.txt", "/src/lyrics/enakoru_girlfriend_venummadi.txt", "/src/lyrics/june_ponal_july.txt", "/src/lyrics/maduraiku_pogathadi.txt", "/src/lyrics/saamikitta_solliputen.txt", "/src/lyrics/adiye_kolluthe.txt", "/src/lyrics/uyire_unnai_enthan.txt", "/src/lyrics/mannipaya.txt", "/src/lyrics/anal_mele_panithuli.txt", "/src/lyrics/ava_ennai_thedi_vantha_anjala.txt", "/src/lyrics/enathuyire_enathuyire.txt", "/src/lyrics/ennai_konjam_maatri.txt", "/src/lyrics/kangal_neeye.txt", "/src/lyrics/maalai_mangum_neram.txt", "/src/lyrics/munthinam_parthene.txt", "/src/lyrics/nenjukul_peithidum.txt", "/src/lyrics/omana_penne.txt", "/src/lyrics/vaseegara_en_nenjinikka.txt", "/src/lyrics/venmathi_venmathi_nillu.txt", "/src/lyrics/ivan_yaaro_ivan_yaaro.txt", "/src/lyrics/kanaa_kandenadi.txt", "/src/lyrics/kooda_mela_kooda_vachi.txt", "/src/lyrics/aasaya_kaathula_thoothu.txt", "/src/lyrics/intha_maan_unthan_sonthamaan.txt", "/src/lyrics/kaatril_enthan_keetham.txt", "/src/lyrics/maanguyile_poonguyile.txt", "/src/lyrics/mannil_intha_kathal.txt", "/src/lyrics/muthumanimalai.txt", "/src/lyrics/oorusanam_thoongiduchu.txt", "/src/lyrics/ooruvittu_ooruvanthu.txt", "/src/lyrics/senbagame_senbagame.txt", "/src/lyrics/athikaai_kaai_alankaai.txt", "/src/lyrics/kanne_kalaimaane.txt", "/src/lyrics/nenjam_undu_nermai_undu.txt", "/src/lyrics/ninaika_therintha_maname.txt", "/src/lyrics/paartha_niyabgam_illaiyo.txt", "/src/lyrics/pani_illatha_margaliya.txt", "/src/lyrics/pattu_padava_paarthu_pesava.txt", "/src/lyrics/aadaludan_padalai.txt", "/src/lyrics/aalapol_velapol.txt", "/src/lyrics/amma_entrazhaikaatha_uyir.txt", "/src/lyrics/ye_azhagiya_theeye.txt", "/src/lyrics/chinna_thaayaval.txt", "/src/lyrics/ilankaathu_veesuthe.txt", "/src/lyrics/en_frienda_pola_yaaru.txt", "/src/lyrics/enai_kaanavilaiye_netrodu.txt", "/src/lyrics/enna_vilaiyazhage.txt", "/src/lyrics/innisai_paadivarum.txt", "/src/lyrics/kathala_kathala_kathalaal_thavikiren.txt", "/src/lyrics/kadavul_ullame.txt", "/src/lyrics/kathalenum_thervezhuthi.txt", "/src/lyrics/kathal_siluvaiyil.txt", "/src/lyrics/kaalamellam_kathal_vazhga.txt", "/src/lyrics/kangal_irandaal.txt", "/src/lyrics/kanmani_anbodu.txt", "/src/lyrics/malai_kovil_vaasalil.txt", "/src/lyrics/mushthaba_mushthaba.txt", "/src/lyrics/naan_aanaiyittal.txt", "/src/lyrics/naan_parthathile_aval_oruthiyai.txt", "/src/lyrics/nenachapadi_nenachapadi.txt", "/src/lyrics/newyork_nagaram.txt", "/src/lyrics/munbe_vaa_anbe_vaa.txt", "/src/lyrics/nilaave_vaa.txt", "/src/lyrics/oh_maria.txt", "/src/lyrics/oh_vennila_iru_vaanila.txt", "/src/lyrics/oru_kaditham_ezhuthinen.txt", "/src/lyrics/oru_naalum_unai_maravaatha.txt", "/src/lyrics/puthu_mapplilaiku.txt", "/src/lyrics/adi_raakamma_kaiya_thattu.txt", "/src/lyrics/sunthari_kannal_oru_sethi.txt", "/src/lyrics/kaattukuyilu_manasukkula.txt", "/src/lyrics/roja_roja.txt", "/src/lyrics/thaandiya_aatamum_aada.txt", "/src/lyrics/sollamal_thottu_sellum.txt", "/src/lyrics/tajmahal_oviya_kathal.txt", "/src/lyrics/thenmadurai_vaigai_nathi.txt", "/src/lyrics/thooliyile_aadavantha.txt", "/src/lyrics/thottal_poo_malarum.txt", "/src/lyrics/thulluvatho_ilamai.txt", "/src/lyrics/ulagil_yentha_kathal.txt", "/src/lyrics/unai_ninaithu_naan_enai_marappathu.txt", "/src/lyrics/unna_ninachen_paattu_padichen.txt", "/src/lyrics/vaa_vennila_unnai_thane.txt", "/src/lyrics/vaigasi_nilave.txt", "/src/lyrics/valliye_sakkara_valliye.txt", "/src/lyrics/vathikuchi_pathikaathada.txt", "/src/lyrics/etho_ontru_etho_ontru_unnai_ketpen.txt", "/src/lyrics/nenjil_nenjil_itho_itho.txt", "/src/lyrics/theeyillai_pugaiyillai.txt"];
filesToCache.concat(lyricsFilesToCache);

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  /*
   * Fixes a corner case in which the app wasn't returning the latest data.
   * You can reproduce the corner case by commenting out the line below and
   * then doing the following steps: 1) load app for first time so that the
   * initial New York City data is shown 2) press the refresh button on the
   * app 3) go offline 4) reload the app. You expect to see the newer NYC
   * data, but you actually see the initial data. This happens because the
   * service worker is not yet activated. The code below essentially lets
   * you activate the service worker faster.
   */
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cacheName).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
