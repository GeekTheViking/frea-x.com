#!/bin/bash

# Script til at tilføje translationKey til alle sider i Postbox.eu
# Kør fra projektets rod: ./admin/add-translation-keys.sh

echo "Tilføjer translationKeys til alle sider..."

# DA → EN → FR mapping for epost sektionen
echo "Behandler E-POST sektion..."
for file_da in ~/projects/postbox-eu/content/da/epost/*/_index.md; do
    if [ -f "$file_da" ]; then
        folder=$(basename $(dirname "$file_da"))
        key="epost-$folder"
        
        # Dansk
        if ! grep -q "translationKey:" "$file_da"; then
            sed -i "/^---$/a translationKey: \"$key\"" "$file_da"
            echo "  Tilføjet $key til $file_da"
        fi
        
        # Engelsk
        file_en="$HOME/projects/postbox-eu/content/en/epost/$folder/_index.md"
        if [ -f "$file_en" ]; then
            if ! grep -q "translationKey:" "$file_en"; then
                sed -i "/^---$/a translationKey: \"$key\"" "$file_en"
                echo "  Tilføjet $key til $file_en"
            fi
        fi
        
        # Fransk (franske mappenavne kan være anderledes)
        case "$folder" in
            "indbakke") fr_folder="reception" ;;
            "sendt") fr_folder="envoye" ;;
            "kladder") fr_folder="brouillons" ;;
            "arkiv") fr_folder="archive" ;;
            "papirkurv") fr_folder="corbeille" ;;
            *) fr_folder="$folder" ;;
        esac
        
        file_fr="$HOME/projects/postbox-eu/content/fr/epost/$fr_folder/_index.md"
        if [ -f "$file_fr" ]; then
            if ! grep -q "translationKey:" "$file_fr"; then
                sed -i "/^---$/a translationKey: \"$key\"" "$file_fr"
                echo "  Tilføjet $key til $file_fr"
            fi
        fi
    fi
done

# Behandler MAILS sektion
echo "Behandler MAILS sektion..."
for file_da in ~/projects/postbox-eu/content/da/mails/*/_index.md; do
    if [ -f "$file_da" ]; then
        folder=$(basename $(dirname "$file_da"))
        key="mails-$folder"
        
        # Dansk
        if ! grep -q "translationKey:" "$file_da"; then
            sed -i "/^---$/a translationKey: \"$key\"" "$file_da"
            echo "  Tilføjet $key til $file_da"
        fi
        
        # Engelsk
        file_en="$HOME/projects/postbox-eu/content/en/mails/$folder/_index.md"
        if [ -f "$file_en" ]; then
            if ! grep -q "translationKey:" "$file_en"; then
                sed -i "/^---$/a translationKey: \"$key\"" "$file_en"
                echo "  Tilføjet $key til $file_en"
            fi
        fi
        
        # Fransk
        case "$folder" in
            "indbakke") fr_folder="reception" ;;
            "sendt") fr_folder="envoye" ;;
            "kladder") fr_folder="brouillons" ;;
            "arkiv") fr_folder="archive" ;;
            "papirkurv") fr_folder="corbeille" ;;
            "spam") fr_folder="spam" ;;
            "sikker") fr_folder="securise" ;;
            *) fr_folder="$folder" ;;
        esac
        
        file_fr="$HOME/projects/postbox-eu/content/fr/mails/$fr_folder/_index.md"
        if [ -f "$file_fr" ]; then
            if ! grep -q "translationKey:" "$file_fr"; then
                sed -i "/^---$/a translationKey: \"$key\"" "$file_fr"
                echo "  Tilføjet $key til $file_fr"
            fi
        fi
    fi
done

# Behandler selvstændige sider (kalender, kontakter, filer, ai, etc.)
echo "Behandler selvstændige sider..."
for page in kalender kontakter filer ai privatliv indstillinger dashboard; do
    key="page-$page"
    
    # Dansk
    file_da="$HOME/projects/postbox-eu/content/da/$page/_index.md"
    if [ -f "$file_da" ]; then
        if ! grep -q "translationKey:" "$file_da"; then
            sed -i "/^---$/a translationKey: \"$key\"" "$file_da"
            echo "  Tilføjet $key til $file_da"
        fi
    fi
    
    # Engelsk
    case "$page" in
        "kalender") en_page="calendar" ;;
        "kontakter") en_page="contacts" ;;
        "filer") en_page="files" ;;
        "ai") en_page="ai" ;;
        "privatliv") en_page="privacy" ;;
        "indstillinger") en_page="settings" ;;
        "dashboard") en_page="dashboard" ;;
        *) en_page="$page" ;;
    esac
    
    file_en="$HOME/projects/postbox-eu/content/en/$en_page/_index.md"
    if [ -f "$file_en" ]; then
        if ! grep -q "translationKey:" "$file_en"; then
            sed -i "/^---$/a translationKey: \"$key\"" "$file_en"
            echo "  Tilføjet $key til $file_en"
        fi
    fi
    
    # Fransk
    case "$page" in
        "kalender") fr_page="calendrier" ;;
        "kontakter") fr_page="contacts" ;;
        "filer") fr_page="fichiers" ;;
        "ai") fr_page="ai" ;;
        "privatliv") fr_page="confidentialite" ;;
        "indstillinger") fr_page="parametres" ;;
        "dashboard") fr_page="dashboard" ;;
        *) fr_page="$page" ;;
    esac
    
    file_fr="$HOME/projects/postbox-eu/content/fr/$fr_page/_index.md"
    if [ -f "$file_fr" ]; then
        if ! grep -q "translationKey:" "$file_fr"; then
            sed -i "/^---$/a translationKey: \"$key\"" "$file_fr"
            echo "  Tilføjet $key til $file_fr"
        fi
    fi
done

echo "Færdig! Genstart hugo server for at se effekten."
