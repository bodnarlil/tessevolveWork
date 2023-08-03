library(dplyr)

# read in all the CSVs for 4D
CF1 <- read.csv('coords_CF1_4D.csv')
CF2 <- read.csv('coords_CF2_4D.csv')
shubert <- read.csv('coords_shubert_4D.csv')
vincent <- read.csv('coords_vincent_4D.csv')

# look at the files (because they do not all have the same column names)
head(CF1)
head(CF2)
head(shubert)
head(vincent)
# we need to convert the vincent file to the same units of measurement as the other three

# also, use  ->  cat("\014")  <-  to clear the console

# create the name of the file
fileCF1 <- "CF1"
fileCF2 <- "CF2"
fileShubert <- "shubert"
fileVincent <- "vincent"

# add the new column filling everything with the name set above
CF1$File <- fileCF1
CF2$File <- fileCF2
shubert$File <- fileShubert
vincent$File <- fileVincent

# save them all as new files
write.csv(CF1, "updated_CF1_4D.csv", row.names = FALSE)
write.csv(CF2, "updated_CF2_4D.csv", row.names = FALSE)
write.csv(shubert, "updated_shubert_4D.csv", row.names = FALSE)
write.csv(vincent, "updated_vincent_4D.csv", row.names = FALSE)

# combine the new .csv files
combined_4D <- rbind(CF1, CF2, shubert)#, vincent)
write.csv(combined_4D, "combined_data_4D_without_vincent_data.csv", row.names = FALSE)