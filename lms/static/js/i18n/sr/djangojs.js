

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "%(sel)s of %(cnt)s selected": [
      "%(sel)s \u043e\u0434 %(cnt)s \u0438\u0437\u0430\u0431\u0440\u0430\u043d",
      "%(sel)s \u043e\u0434 %(cnt)s \u0438\u0437\u0430\u0431\u0440\u0430\u043d\u0430",
      "%(sel)s \u043e\u0434 %(cnt)s \u0438\u0437\u0430\u0431\u0440\u0430\u043d\u0438\u0445"
    ],
    "6 a.m.": "18\u0447",
    "6 p.m.": "18\u0447",
    "April": "\u0410\u043f\u0440\u0438\u043b",
    "August": "\u0410\u0432\u0433\u0443\u0441\u0442",
    "Available %s": "\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0438 %s",
    "Cancel": "\u041f\u043e\u043d\u0438\u0448\u0442\u0438",
    "Changes to steps that are not selected as part of the assignment will not be saved.": "Los cambios en los pasos que no est\u00e1n seleccinados como parte de la actividad no se guardar\u00e1n.",
    "Choose": "\u0418\u0437\u0430\u0431\u0435\u0440\u0438",
    "Choose a Date": "\u041e\u0434\u0430\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443\u043c",
    "Choose a Time": "\u041e\u0434\u0430\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u0435",
    "Choose a time": "\u041e\u0434\u0430\u0431\u0438\u0440 \u0432\u0440\u0435\u043c\u0435\u043d\u0430",
    "Choose all": "\u0418\u0437\u0430\u0431\u0435\u0440\u0438 \u0441\u0432\u0435",
    "Chosen %s": "\u0418\u0437\u0430\u0431\u0440\u0430\u043d\u043e \u201e%s\u201c",
    "Click to choose all %s at once.": "\u0418\u0437\u0430\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u0435 \u201e%s\u201c \u043e\u0434\u0458\u0435\u0434\u043d\u043e\u043c.",
    "Click to remove all chosen %s at once.": "\u0423\u043a\u043b\u043e\u043d\u0438\u0442\u0435 \u0441\u0432\u0435 \u0438\u0437\u0430\u0431\u0440\u0430\u043d\u0435 \u201e%s\u201c \u043e\u0434\u0458\u0435\u0434\u043d\u043e\u043c.",
    "Could not retrieve download url.": "No se ha podido obtener la url de descarga.",
    "Could not retrieve upload url.": "No se ha podido obtener la url de subida",
    "Couldn't Save This Assignment": "No se ha podido guardar esta tarea",
    "Criterion Added": "Criterio a\u00f1adido",
    "Criterion Deleted": "Criterio eliminado",
    "December": "\u0414\u0435\u0446\u0435\u043c\u0431\u0430\u0440",
    "Error": "Error",
    "February": "\u0424\u0435\u0431\u0440\u0443\u0430\u0440",
    "Filter": "\u0424\u0438\u043b\u0442\u0435\u0440",
    "Hide": "\u0421\u0430\u043a\u0440\u0438\u0458",
    "January": "\u0408\u0430\u043d\u0443\u0430\u0440",
    "July": "\u0408\u0443\u043b",
    "June": "\u0408\u0443\u043d",
    "March": "\u041c\u0430\u0440\u0442",
    "May": "\u041c\u0430\u0458",
    "Midnight": "\u041f\u043e\u043d\u043e\u045b",
    "Noon": "\u041f\u043e\u0434\u043d\u0435",
    "Not Selected": "No seleccionado",
    "Note: You are %s hour ahead of server time.": [
      "\u041e\u0431\u0430\u0432\u0435\u0448\u0442\u0435\u045a\u0435: %s \u0441\u0430\u0442 \u0441\u0442\u0435 \u0438\u0441\u043f\u0440\u0435\u0434 \u0441\u0435\u0440\u0432\u0435\u0440\u0441\u043a\u043e\u0433 \u0432\u0440\u0435\u043c\u0435\u043d\u0430.",
      "\u041e\u0431\u0430\u0432\u0435\u0448\u0442\u0435\u045a\u0435: %s \u0441\u0430\u0442\u0430 \u0441\u0442\u0435 \u0438\u0441\u043f\u0440\u0435\u0434 \u0441\u0435\u0440\u0432\u0435\u0440\u0441\u043a\u043e\u0433 \u0432\u0440\u0435\u043c\u0435\u043d\u0430.",
      "\u041e\u0431\u0430\u0432\u0435\u0448\u0442\u0435\u045a\u0435: %s \u0441\u0430\u0442\u0438 \u0441\u0442\u0435 \u0438\u0441\u043f\u0440\u0435\u0434 \u0441\u0435\u0440\u0432\u0435\u0440\u0441\u043a\u043e\u0433 \u0432\u0440\u0435\u043c\u0435\u043d\u0430."
    ],
    "Note: You are %s hour behind server time.": [
      "\u041e\u0431\u0430\u0432\u0435\u0448\u0442\u0435\u045a\u0435: %s \u0441\u0430\u0442 \u0441\u0442\u0435 \u0438\u0437\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0441\u043a\u043e\u0433 \u0432\u0440\u0435\u043c\u0435\u043d\u0430.",
      "\u041e\u0431\u0430\u0432\u0435\u0448\u0442\u0435\u045a\u0435: %s \u0441\u0430\u0442\u0430 \u0441\u0442\u0435 \u0438\u0437\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0441\u043a\u043e\u0433 \u0432\u0440\u0435\u043c\u0435\u043d\u0430.",
      "\u041e\u0431\u0430\u0432\u0435\u0448\u0442\u0435\u045a\u0435: %s \u0441\u0430\u0442\u0438 \u0441\u0442\u0435 \u0438\u0437\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0441\u043a\u043e\u0433 \u0432\u0440\u0435\u043c\u0435\u043d\u0430."
    ],
    "November": "\u041d\u043e\u0432\u0435\u043c\u0431\u0430\u0440",
    "Now": "\u0422\u0440\u0435\u043d\u0443\u0442\u043d\u043e \u0432\u0440\u0435\u043c\u0435",
    "October": "\u041e\u043a\u0442\u043e\u0431\u0430\u0440",
    "One or more rescheduling tasks failed.": "Una o m\u00e1s tareas reprogramadas han fallado.",
    "Option Deleted": "Opci\u00f3n eliminada",
    "Please correct the outlined fields.": "Por favor, corrige los campos marcados.",
    "Remove": "\u0423\u043a\u043b\u043e\u043d\u0438",
    "Remove all": "\u0423\u043a\u043b\u043e\u043d\u0438 \u0441\u0432\u0435",
    "Saving...": "Guardando...",
    "September": "\u0421\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440",
    "Show": "\u041f\u043e\u043a\u0430\u0436\u0438",
    "Status of Your Response": "Estado de tu respuesta",
    "The server could not be contacted.": "No se pudo contactar con el servidor.",
    "The submission could not be removed from the grading pool.": "La entrega no pudo eliminarse del tabl\u00f3n de calificaciones.",
    "This assessment could not be submitted.": "Este examen no ha podido enviarse.",
    "This feedback could not be submitted.": "Los comentarios no han podido enviarse.",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "\u041e\u0432\u043e \u0458\u0435 \u043b\u0438\u0441\u0442\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0445 \u201e%s\u201c. \u041c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u0430\u0431\u0440\u0430\u0442\u0438 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0435 \u0442\u0430\u043a\u043e \u0448\u0442\u043e \u045b\u0435\u0442\u0435 \u0438\u0445 \u0438\u0437\u0430\u0431\u0440\u0430\u0442\u0438 \u0443 \u043b\u0438\u0441\u0442\u0438 \u0438 \u043a\u043b\u0438\u043a\u043d\u0443\u0442\u0438 \u043d\u0430 \u201e\u0418\u0437\u0430\u0431\u0435\u0440\u0438\u201c.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "\u041e\u0432\u043e \u0458\u0435 \u043b\u0438\u0441\u0442\u0430 \u0438\u0437\u0430\u0431\u0440\u0430\u043d\u0438\u0445 \u201e%s\u201c. \u041c\u043e\u0436\u0435\u0442\u0435 \u0443\u043a\u043b\u043e\u043d\u0438\u0442\u0438 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0435 \u0442\u0430\u043a\u043e \u0448\u0442\u043e \u045b\u0435\u0442\u0435 \u0438\u0445 \u0438\u0437\u0430\u0431\u0440\u0430\u0442\u0438 \u0443 \u043b\u0438\u0441\u0442\u0438 \u0438 \u043a\u043b\u0438\u043a\u043d\u0443\u0442\u0438 \u043d\u0430 \u201e\u0423\u043a\u043b\u043e\u043d\u0438\u201c.",
    "This problem could not be saved.": "Este ejercicio no ha podido guardarse.",
    "This problem has already been released. Any changes will apply only to future assessments.": "Este ejercicio ya se ha enviado. Cualquier otro cambio se aplicar\u00e1 solamente a calificaciones futuras.",
    "This response could not be saved.": "Esta respuesta no ha podido guardarse.",
    "This response could not be submitted.": "Esta respuesta no ha podido enviarse.",
    "This response has been saved but not submitted.": "Esta respuesta se ha guardado pero no se ha enviado",
    "This response has not been saved.": "Esta respuesta no se ha guardado.",
    "This section could not be loaded.": "Esta secci\u00f3n no ha podido cargarse.",
    "Today": "\u0414\u0430\u043d\u0430\u0441",
    "Tomorrow": "\u0421\u0443\u0442\u0440\u0430",
    "Type into this box to filter down the list of available %s.": "\u0424\u0438\u043b\u0442\u0440\u0438\u0440\u0430\u0458\u0442\u0435 \u043b\u0438\u0441\u0442\u0443 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0445 \u0435\u043b\u0435\u043c\u0435\u043d\u0430\u0442\u0430 \u201e%s\u201c.",
    "Unnamed Option": "Opci\u00f3n sin nombre",
    "Warning": "Aviso",
    "Yesterday": "\u0408\u0443\u0447\u0435",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "\u0418\u0437\u0430\u0431\u0440\u0430\u043b\u0438 \u0441\u0442\u0435 \u0430\u043a\u0446\u0438\u0458\u0443 \u0430\u043b\u0438 \u043d\u0438\u0441\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u0438 \u043d\u0438 \u0458\u0435\u0434\u043d\u043e \u043f\u043e\u0459\u0435.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "\u0418\u0437\u0430\u0431\u0440\u0430\u043b\u0438 \u0441\u0442\u0435 \u0430\u043a\u0446\u0438\u0458\u0443 \u0430\u043b\u0438 \u043d\u0438\u0441\u0442\u0435 \u0441\u0430\u0447\u0443\u0432\u0430\u043b\u0438 \u043f\u0440\u043e\u043c\u0435\u043d\u0435 \u043f\u043e\u0459\u0430.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "\u0418\u043c\u0430\u0442\u0435 \u043d\u0435\u0441\u0430\u0447\u0438\u0432\u0430\u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u0435. \u0410\u043a\u043e \u043f\u043e\u043a\u0440\u0435\u043d\u0435\u0442\u0435 \u0430\u043a\u0446\u0438\u0458\u0443, \u0438\u0437\u043c\u0435\u043d\u0435 \u045b\u0435 \u0431\u0438\u0442\u0438 \u0438\u0437\u0433\u0443\u0431\u0459\u0435\u043d\u0435.",
    "You're about to submit your response for this assignment. After you submit this response, you can't change it or submit a new response.": "Est\u00e1s a punto de enviar tu respuesta para este ejercicio. Despu\u00e9s de enviar esta respuesta, no podr\u00e1s cambiarla o enviar una nueva.",
    "one letter Friday\u0004F": "\u041f",
    "one letter Monday\u0004M": "\u041f",
    "one letter Saturday\u0004S": "\u0421",
    "one letter Sunday\u0004S": "\u041d",
    "one letter Thursday\u0004T": "\u0427",
    "one letter Tuesday\u0004T": "\u0423",
    "one letter Wednesday\u0004W": "\u0421"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j. F Y. H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y. %H:%M:%S",
      "%d.%m.%Y. %H:%M:%S.%f",
      "%d.%m.%Y. %H:%M",
      "%d.%m.%Y.",
      "%d.%m.%y. %H:%M:%S",
      "%d.%m.%y. %H:%M:%S.%f",
      "%d.%m.%y. %H:%M",
      "%d.%m.%y.",
      "%d. %m. %Y. %H:%M:%S",
      "%d. %m. %Y. %H:%M:%S.%f",
      "%d. %m. %Y. %H:%M",
      "%d. %m. %Y.",
      "%d. %m. %y. %H:%M:%S",
      "%d. %m. %y. %H:%M:%S.%f",
      "%d. %m. %y. %H:%M",
      "%d. %m. %y.",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j. F Y.",
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y.",
      "%d.%m.%y.",
      "%d. %m. %Y.",
      "%d. %m. %y.",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j. F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "j.m.Y. H:i",
    "SHORT_DATE_FORMAT": "j.m.Y.",
    "THOUSAND_SEPARATOR": ".",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y."
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));

