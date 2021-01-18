
const fetch = require('node-fetch');

class Item {
    constructor(hostname, itemlink, result) {
        this.hostname = hostname
        this.itemlink = itemlink
    }

    checkInStock = async function () {
        const options = {

            hostname: this.hostname,
            path: this.itemlink,
            method: 'GET',
            headers: {
                'sec-ch-ua-mobile': '?0',
                'sec-fetch-dest': 'document',
                'sec-fetch-mode': 'navigate',
                'sec-fetch-site': 'none',
                'sec-fetch-user': '?1',
                'service-worker-navigation-preload': true,
                'upgrade-insecure-requests': 1,
                //'cookie': 'DL=94066%2C%2C%2Cip%2C94066%2C%2C; vtc=XBTNTCHD1Aafek2Ce3VXe4; TS013ed49a=01538efd7c776a1001c5b5a917dc475e5ab9c9e9e6e7520a129cfef5eb7f6136e5db21dd0de0c40493849cd85a6009606c9d8b6024; TBV=7; _pxvid=e0e23393-5909-11eb-966a-0242ac120006; __gads=ID=7aa3ce412e6bb6c5:T=1610918459:S=ALNI_Mafldvzrof6xi9ItNbiOkVCOEFBvg; _gcl_au=1.1.1357722945.1610918464; viq=Walmart; _fbp=fb.1.1610918469406.683205232; tb_sw_supported=true; hasCRT=1; CRT=c24b6b90-6cc3-4fdf-bf7e-8d9605809f45; ACID=cc0b4989-7ab9-4ede-aa6d-9ccc330fe33c; hasACID=1; auth=MTAyOTYyMDE4fyCzgC8E%2FW3fvgONehugtXU1h3pkjJsNP3OEJexitdHXqLfSPV4AEbOPHRrkOKv%2BLL2UfNSQ15q3hE6H4i25sqjPlubT7xMwylkAHbs6PAy35MeaYA1%2F1%2Fs5B2n%2B18wV767wuZloTfhm7Wk2KcjygjFwIZIekXC4wlSRgDWHtlxaBJ%2BNGjZf35HCZp7bu7DUxTnlR9K7nKoD1bYX9QoQ4nGi%2Bbrsou%2FX7J%2FWwWwcsKkUMk70P8glgOEpLOprhDfMywI05adPtwc9%2Fm5r1ONHRzn0hnfdFNNWJ0sgMNlkK28p%2BaKtdwxD1HmLvzryZ2Tc%2FZSNkhn%2BZOY0ujJCzUll00gy1rEVNbZ8WlWUqUMqs1f0WtT9nytqTuEriIUIaIw2a0SazVWJIVa6fiEZj1Dl0g%3D%3D; type=GUEST; cart-item-count=1; akavpau_p1=1610923207~id=1194b215ff00954c0b8b84358e5056a0; cid_csid=7ea9f6e2-86b8-442a-bc49-70f6b4a6d048; _sp_id.ad94=2ecc540d-ae94-4c16-8068-56f25040dbfe.1610923663.1.1610923664.1610923663.421102fe-19aa-4b4e-b6a2-74f67547e2ed; hasPCID=1; PCID=1ddeb0aa-549f-472f-95fa-88cc41921a44; XPC_DB=1ddeb0aa-549f-472f-95fa-88cc41921a44%7CC; _abck=cry6cggokqfonyecd4vo_2049; _ga=GA1.2.265697314.1610924194; _gid=GA1.2.1907561360.1610924194; cbp=398668888-1610922571417|771778357-1610923658322|716871078-1610924218252|24017055-1610972162125|46887165-1610974753578; cw_csid=7ea9f6e2-86b8-442a-bc49-70f6b4a6d048; mobileweb=0; xpa=JA3ix|LH9Ns|P1ddI|PBcSj; exp-ck=JA3ix1LH9Ns1P1ddI1PBcSj1; bstc=cREQWOM_F-7XmfrMo72cdI; xpm=1%2B1610990687%2BXBTNTCHD1Aafek2Ce3VXe4~%2B0; location-data=94066%3ASan%20Bruno%3ACA%3A%3A0%3A0|21k%3B%3B15.22%2C46y%3B%3B16.96%2C1kf%3B%3B19.87%2C1rc%3B%3B23.22%2C46q%3B%3B25.3%2C2nz%3B%3B25.4%2C2b1%3B%3B27.7%2C4bu%3B%3B28.38%2C2er%3B%3B29.12%2C1o1%3B%3B30.14|2|7|1|1xun%3B16%3B0%3B2.44%2C1xtf%3B16%3B1%3B4.42%2C1xwj%3B16%3B2%3B7.04%2C1ygu%3B16%3B3%3B8.47%2C1xwq%3B16%3B4%3B9.21; TB_DC_Flap_Test=0; athrvi=RVI~h34d4c2b-h1c322daf-h2cb70fd-h2e1d9d2a-h34f67c8f-h16e789f-h34d4caa-h2aba95a6-h2e006735-h17c33458; s_sess_2=c32_v%3DS2H%2Cnull%3B%20prop32%3D; com.wm.reflector="reflectorid:0000000000000000000000@lastupd:1610992639153@firstcreate:1610992615311"; _uetsid=e7701bc0590911ebad03cffd5053674f; _uetvid=e7703dd0590911eb9794d5baf0a2935c; next-day=1611007200|true|false|1611057600|1610993347; TS01b0be75=01538efd7cb9d62addc8005192ba4ededf31e32df7ea1b390a91c11516f36df213888b30e6549a750f196fc1d4c3a6300745fac18d; akavpau_p8=1610993947~id=37dd4e9f7eded7e36ee4039837fa4adc',
                'sec-ch-ua': '"Google Chrome";v="87", " Not;A Brand";v="99", "Chromium";v="87"',
                'cache-control': 'max-age=0',
                'scheme': 'https',
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'authority': 'www.walmart.com',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
            },
        };

        var res = await fetch(this.hostname + this.itemlink, options)
        return res.headers.get('stockstatus')
           

    }
}

module.exports = Item