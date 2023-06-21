import fs from 'fs-extra'
fs.readdirSync("country")?.map(country => fs.renameSync(`country/${country}`, `country/${country.replace("BfsTV - Country Flag - ", "").substring(0, 3)}.png`))