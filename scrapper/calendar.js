const getGamesFromSource = async () => {
    const content = await fetch('http://datos.munimadrid.es/datosabiertos/DEPORTES/RESULTADOS_DE_LOS_JUEGOS_PARTIDOS/2024/02/Partidos_20240207.txt')
    const txtContent = await content.text()
    const lines = txtContent.split('\n')
    const orangutanGames = lines.filter(line => line.includes('ORANGU-TANG'))
    const games = orangutanGames.map(orangutanGame => {
        const structuredGame = orangutanGame.split('\t')
        return {
            rival: structuredGame[22] !== 'ORANGU-TANG CLAN' ?  structuredGame[22] : structuredGame[23],
            date: structuredGame[11] +' '+ structuredGame[12],
            court: structuredGame[24]
        }
    })
    return games
/*     const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
  
    // Navigate the page to a URL
    await page.goto('https://deportesweb.madrid.es/DeportesWeb/login');
    const loginPage = await page.waitForSelector('.navigation-section-widget-collection-item-title');
    await loginPage.click()
    await page.waitForNavigation()
    const betweenPageLoginButton = await page.waitForSelector('#acceso_pass')
    await betweenPageLoginButton.click()
    await page.$eval('#correoelectronico', el => el.value = 'rafael.ortega.caceres@hotmail.com');
    await page.$eval('#contrasenia', el => el.value = 'Orangutan15');
    const loginButton = await page.waitForSelector('.button-icon-arrowright');
    await loginButton.click()
    await page.waitForNavigation()
    await page.goto('https://deportesweb.madrid.es/DeportesWeb/Modulos/VentaServicios/Competiciones/ConsultarEncuentros?token=5F47B0942AD5C1AED43D376917D8825318F63DDB473340AA5E2DCE778BDE60F1')
    await page.waitForNavigation()
    await page.evaluate(async () => {
        const teamSelector = document.getElementById('ContentFixedSection_uConsultarEncuentros_uConsultarEncuentrosConsultar_ddlGrupos')
        teamSelector.value = '21,11,14876,306,League,2';

    });
    const html = await page.content()
    await browser.close();
    return html */
}

module.exports = { getGamesFromSource }