const audioPlayer = document.getElementById('carAudio');
    audioPlayer.volume = 0.1;

const categories = [
    'tabby', 'siamese', 'persian', 'maine_coon', 'kitten', 'black_cat', 'white_cat', 'calico', 'ginger', 'outdoor_cat'
];

// Updated image categories with fast-loading URLs
const imageCategories = {
    tabby: [
        'https://images.pexels.com/photos/1770918/pexels-photo-1770918.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/236606/pexels-photo-236606.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1770908/pexels-photo-1770908.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/236595/pexels-photo-236595.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&fit=scale',
        'https://images.unsplash.com/photo-1495360010541-f3af36b5054e?w=150&fit=scale',
        'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=150&fit=scale',
        'https://images.unsplash.com/photo-1519052537078-e630b3a44e43?w=150&fit=scale',
        'https://images.unsplash.com/photo-1548247416-ec66f9a6f3f9?w=150&fit=scale',
        'https://images.unsplash.com/photo-1573865526698-6b6f226c7d66?w=150&fit=scale',
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=150&fit=scale',
        'https://images.unsplash.com/photo-1501820488136-726bb2e3380b?w=150&fit=scale'
    ],
    siamese: [
        'https://images.pexels.com/photos/1269188/pexels-photo-1269188.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1573324/pexels-photo-1573324.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/236606/pexels-photo-236606.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1770918/pexels-photo-1770918.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.unsplash.com/photo-1516728778615-2d590ea1856e?w=150&fit=scale',
        'https://images.unsplash.com/photo-1574231163091-22016f3b417a?w=150&fit=scale',
        'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=150&fit=scale',
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=150&fit=scale',
        'https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=150&fit=scale',
        'https://images.unsplash.com/photo-1548247416-ec66f9a6f3f9?w=150&fit=scale',
        'https://images.unsplash.com/photo-1519052537078-e630b3a44e43?w=150&fit=scale',
        'https://images.unsplash.com/photo-1501820488136-726bb2e3380b?w=150&fit=scale'
    ],
    persian: [
        'https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/236606/pexels-photo-236606.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1770918/pexels-photo-1770918.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1573324/pexels-photo-1573324.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.unsplash.com/photo-1519052537078-e630b3a44e43?w=150&fit=scale',
        'https://images.unsplash.com/photo-1501820488136-726bb2e3380b?w=150&fit=scale',
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&fit=scale',
        'https://images.unsplash.com/photo-1495360010541-f3af36b5054e?w=150&fit=scale',
        'https://images.unsplash.com/photo-1573865526698-6b6f226c7d66?w=150&fit=scale',
        'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=150&fit=scale',
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=150&fit=scale',
        'https://images.unsplash.com/photo-1548247416-ec66f9a6f3f9?w=150&fit=scale'
    ],
    maine_coon: [
        'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1573324/pexels-photo-1573324.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/236606/pexels-photo-236606.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1770918/pexels-photo-1770918.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=150&fit=scale',
        'https://images.unsplash.com/photo-1548247416-ec66f9a6f3f9?w=150&fit=scale',
        'https://images.unsplash.com/photo-1516728778615-2d590ea1856e?w=150&fit=scale',
        'https://images.unsplash.com/photo-1519052537078-e630b3a44e43?w=150&fit=scale',
        'https://images.unsplash.com/photo-1501820488136-726bb2e3380b?w=150&fit=scale',
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&fit=scale',
        'https://images.unsplash.com/photo-1495360010541-f3af36b5054e?w=150&fit=scale',
        'https://images.unsplash.com/photo-1573865526698-6b6f226c7d66?w=150&fit=scale'
    ],
    kitten: [
        'https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1573324/pexels-photo-1573324.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/236606/pexels-photo-236606.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1770918/pexels-photo-1770918.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=150&fit=scale',
        'https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=150&fit=scale',
        'https://images.unsplash.com/photo-1548247416-ec66f9a6f3f9?w=150&fit=scale',
        'https://images.unsplash.com/photo-1516728778615-2d590ea1856e?w=150&fit=scale',
        'https://images.unsplash.com/photo-1519052537078-e630b3a44e43?w=150&fit=scale',
        'https://images.unsplash.com/photo-1501820488136-726bb2e3380b?w=150&fit=scale',
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&fit=scale',
        'https://images.unsplash.com/photo-1495360010541-f3af36b5054e?w=150&fit=scale'
    ],
    black_cat: [
        'https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1573324/pexels-photo-1573324.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/236606/pexels-photo-236606.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1770918/pexels-photo-1770918.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.unsplash.com/photo-1574231163091-22016f3b417a?w=150&fit=scale',
        'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=150&fit=scale',
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=150&fit=scale',
        'https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=150&fit=scale',
        'https://images.unsplash.com/photo-1548247416-ec66f9a6f3f9?w=150&fit=scale',
        'https://images.unsplash.com/photo-1516728778615-2d590ea1856e?w=150&fit=scale',
        'https://images.unsplash.com/photo-1519052537078-e630b3a44e43?w=150&fit=scale',
        'https://images.unsplash.com/photo-1501820488136-726bb2e3380b?w=150&fit=scale'
    ],
    white_cat: [
        'https://images.pexels.com/photos/1269188/pexels-photo-1269188.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1573324/pexels-photo-1573324.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/236606/pexels-photo-236606.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1770918/pexels-photo-1770918.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.unsplash.com/photo-1574231163091-22016f3b417a?w=150&fit=scale',
        'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=150&fit=scale',
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=150&fit=scale',
        'https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=150&fit=scale',
        'https://images.unsplash.com/photo-1548247416-ec66f9a6f3f9?w=150&fit=scale',
        'https://images.unsplash.com/photo-1516728778615-2d590ea1856e?w=150&fit=scale',
        'https://images.unsplash.com/photo-1519052537078-e630b3a44e43?w=150&fit=scale',
        'https://images.unsplash.com/photo-1501820488136-726bb2e3380b?w=150&fit=scale'
    ],
    calico: [
        'https://images.pexels.com/photos/1770918/pexels-photo-1770918.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1573324/pexels-photo-1573324.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/236606/pexels-photo-236606.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.unsplash.com/photo-1573865526698-6b6f226c7d66?w=150&fit=scale',
        'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=150&fit=scale',
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=150&fit=scale',
        'https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=150&fit=scale',
        'https://images.unsplash.com/photo-1548247416-ec66f9a6f3f9?w=150&fit=scale',
        'https://images.unsplash.com/photo-1516728778615-2d590ea1856e?w=150&fit=scale',
        'https://images.unsplash.com/photo-1519052537078-e630b3a44e43?w=150&fit=scale',
        'https://images.unsplash.com/photo-1501820488136-726bb2e3380b?w=150&fit=scale'
    ],
    ginger: [
        'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/236606/pexels-photo-236606.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1573324/pexels-photo-1573324.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1770918/pexels-photo-1770918.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.unsplash.com/photo-1495360010541-f3af36b5054e?w=150&fit=scale',
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&fit=scale',
        'https://images.unsplash.com/photo-1501820488136-726bb2e3380b?w=150&fit=scale',
        'https://images.unsplash.com/photo-1519052537078-e630b3a44e43?w=150&fit=scale',
        'https://images.unsplash.com/photo-1516728778615-2d590ea1856e?w=150&fit=scale',
        'https://images.unsplash.com/photo-1548247416-ec66f9a6f3f9?w=150&fit=scale',
        'https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=150&fit=scale',
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=150&fit=scale'
    ],
    outdoor_cat: [
        'https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1770918/pexels-photo-1770918.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/236606/pexels-photo-236606.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=150&fit=scale',
        'https://images.unsplash.com/photo-1573865526698-6b6f226c7d66?w=150&fit=scale',
        'https://images.unsplash.com/photo-1495360010541-f3af36b5054e?w=150&fit=scale',
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&fit=scale',
        'https://images.unsplash.com/photo-1501820488136-726bb2e3380b?w=150&fit=scale',
        'https://images.unsplash.com/photo-1519052537078-e630b3a44e43?w=150&fit=scale',
        'https://images.unsplash.com/photo-1516728778615-2d590ea1856e?w=150&fit=scale',
        'https://images.unsplash.com/photo-1548247416-ec66f9a6f3f9?w=150&fit=scale'
    ]
};

const imageContainer = document.getElementById('imageContainer');
const clickText = document.getElementById('clickText');

function getRandomSize() {
    const minSize = 100; // Minimum width/height in pixels
    const maxSize = 300; // Maximum width/height in pixels
    const width = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
    const height = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
    return { width, height };
}

function getRandomPosition(width, height) {
    const maxX = window.innerWidth - width; // Adjust for image width
    const maxY = window.innerHeight - height; // Adjust for image height
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    return { x, y };
}

function makeDraggable(img, x, y, width, height) {
    let isDragging = false;
    let currentX = x; // Initialize with starting position
    let currentY = y;
    let initialX;
    let initialY;

    img.addEventListener('mousedown', startDragging);
    img.addEventListener('dblclick', handleImageClick); // Double-click for spawning

    function startDragging(e) {
        e.preventDefault(); // Prevent default to avoid image drag behavior
        initialX = e.clientX - currentX;
        initialY = e.clientY - currentY;
        isDragging = true;
        img.style.zIndex = 1000; // Bring to front while dragging
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;

            // Constrain within viewport
            const maxX = window.innerWidth - width;
            const maxY = window.innerHeight - height;
            currentX = Math.max(0, Math.min(currentX, maxX));
            currentY = Math.max(0, Math.min(currentY, maxY));

            img.style.left = `${currentX}px`;
            img.style.top = `${currentY}px`;
        }
    }

    function stopDragging() {
        isDragging = false;
        img.style.zIndex = 'auto'; // Reset z-index
    }

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDragging);
}

function spawnImage(imageUrl, category, x, y) {
    const { width, height } = getRandomSize();
    const img = document.createElement('img');
    img.src = imageUrl;
    img.className = 'image';
    img.dataset.category = category;
    img.style.width = `${width}px`;
    img.style.height = `${height}px`;
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    makeDraggable(img, x, y, width, height); // Pass initial x, y, width, height
    imageContainer.appendChild(img);
    // Hide click text after first image spawn
    clickText.style.display = 'none';
}

// Spawn image on viewport click
document.body.addEventListener('click', (e) => {
    // Ignore clicks on images to avoid conflicts with drag or double-click
    if (e.target.classList.contains('image')) return;
    
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const images = imageCategories[randomCategory];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const { width, height } = getRandomSize();
    // Spawn at click position, adjusted to keep image in bounds
    const maxX = window.innerWidth - width;
    const maxY = window.innerHeight - height;
    const x = Math.max(0, Math.min(e.clientX - width / 2, maxX)); // Center image on click
    const y = Math.max(0, Math.min(e.clientY - height / 2, maxY));
    spawnImage(randomImage, randomCategory, x, y);
});

function handleImageClick(event) {
    event.preventDefault(); // Prevent default behavior
    const category = event.target.dataset.category;
    const images = imageCategories[category];
    const numToSpawn = Math.floor(Math.random() * 3) + 1; // Spawn 1-3 related images
    for (let i = 0; i < numToSpawn; i++) {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        const { width, height } = getRandomSize();
        const { x, y } = getRandomPosition(width, height);
        spawnImage(randomImage, category, x, y);
    }
}

// Ensure images stay within viewport on resize
window.addEventListener('resize', () => {
    const images = document.querySelectorAll('.image');
    images.forEach(img => {
        const width = parseInt(img.style.width);
        const height = parseInt(img.style.height);
        const maxX = window.innerWidth - width;
        const maxY = window.innerHeight - height;
        let x = parseInt(img.style.left);
        let y = parseInt(img.style.top);
        if (x > maxX) img.style.left = `${maxX}px`;
        if (y > maxY) img.style.top = `${maxY}px`;
    });
});
